const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(3000);

const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
  httpServer: server
});

const clients = [];

// This code generates unique userid for everyuser.
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

wsServer.on('request', function(request) {
  var userID = getUniqueID();
  console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
  // You can rewrite this part of the code to accept only the requests from allowed origin
  const connection = request.accept(null, request.origin);

  clients.push(connection);
  console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
});
// https://www.youtube.com/watch?v=QBXWZPy1Zfs

function watchDog() {
  clients.forEach(function(connection){
    connection.send(bark());
  });  
  setTimeout(watchDog, 100);
}
watchDog();

let woofCounter = 0
function bark(){
  woofCounter +=1;
  if (woofCounter > 100){woofCounter = 0}
  return woofCounter
}

const SerialPort = require('serialport');

const router = express.Router();

const settings = require('./local-settings.json');


const port = new SerialPort(settings.port, {
  baudRate: 115200,
  bufferSize: 1,
  rtscts: true,
});

var str = '';
var laststr= '';
port.on('data', (data) => {
  str += data;
  if (str.includes('!')) {
    port.flush();
    clients.forEach(function(connection){
      connection.send(str);
    });  
    str = '';
  }
});

