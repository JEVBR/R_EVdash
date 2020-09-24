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
      var inv = JSON.parse(message.data)
      if (inv.id & 32768){ inv.id -= 65536}
      if (inv.iq & 32768){ inv.iq -= 65536}
      if (inv.ia & 32768){ inv.ia -= 65536}
      if (inv.ib & 32768){ inv.ib -= 65536}
      if (inv.ic & 32768){ inv.ic -= 65536}
      if (inv.slipRPM & 32768){ inv.slipRPM -= 65536}
      if (inv.elecRPM & 32768){ inv.elecRPM -= 65536}
      if (inv.mechRPM & 32768){ inv.mechRPM -= 65536}
      setInvReading(inv)
    };
  },[]);

  return (
    <div className = "container pb-5" key = {"app_container"}>
      <DashBoard 
        key = {'Dashboard'}
        invReading = {invReading}
      />
    </div>
  );
}

export default DashboardApp;

