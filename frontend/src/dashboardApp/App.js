import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import DashBoard from './Dash/DashBoard'

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function DashboardApp() {

  useEffect(() => { 
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  },[]);

  return (
    <div className = "container pb-5" key = {"app_container"}>
      <DashBoard 
        key = {'Dashboard'}
      />
    </div>
  );
}

export default DashboardApp;

