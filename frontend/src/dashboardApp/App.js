import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import DashBoard from './Dash/DashBoard'

const client = new W3CWebSocket('ws://127.0.0.1:8000');
//

function DashboardApp() {
  const [invReading, setInvReading] = useState([])

  useEffect(() => { 
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      //console.log(message.data);
      if (message.data >= 100) {console.clear();}
      setInvReading(message.data)
    };
  },[]);

  return (
    <div className = "container pb-5" key = {"app_container"}>
      <DashBoard 
        key = {'Dashboard'}
        data = {invReading}
      />
    </div>
  );
}

export default DashboardApp;

