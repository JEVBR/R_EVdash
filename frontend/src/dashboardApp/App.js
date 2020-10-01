import React, { useState, useEffect, useRef } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import DashBoard from './Dash/DashBoard'

const client = new W3CWebSocket('ws://127.0.0.1:8000');
//const initialRead = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 88], [7, 0], [8, 0], [9, 0]]
const initialRead = Array(20).fill([0,0])

function DashboardApp() {
  const [invReading, setInvReading] = useState([])
  const [idrefReading, setIdrefReading] = useState([])
  const [iqRefReading, setIqrefReading] = useState([])
  const [slipRPMinvReading, setSlipRPMInvReading] = useState([])
  const [elecRPMReading, setElecRPMInvReading] = useState([])
  const [mechRPMReading, setMechRPMReading] = useState([])
  const sequenceCount = useRef(0)
  const idReading = useRef(initialRead)
  const iqReading = useRef(initialRead)
  const iaReading = useRef(initialRead)
  const ibReading = useRef(initialRead)
  const icReading = useRef(initialRead)

  useEffect(() => { 
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      //console.clear()
      //setInvReading(JSON.parse(message.data))
      sequenceCount.current = sequenceCount.current + 1
      var inv = JSON.parse(message.data)

      if (inv.id & 32768){ inv.id -= 65536}
      idReading.current = [...idReading.current, [sequenceCount.current, inv.id]].slice(1)
      if (inv.iq & 32768){ inv.iq -= 65536}
      iqReading.current = [...iqReading.current, [sequenceCount.current, inv.iq]].slice(1)
      if (inv.ia & 32768){ inv.ia -= 65536}
      iaReading.current = [...iaReading.current, [sequenceCount.current, inv.ia]].slice(1)
      if (inv.ib & 32768){ inv.ib -= 65536}
      ibReading.current = [...ibReading.current, [sequenceCount.current, inv.ib]].slice(1)
      if (inv.ic & 32768){ inv.ic -= 65536}
      icReading.current = [...icReading.current, [sequenceCount.current, inv.ic]].slice(1)
      if (inv.slipRPM & 32768){ inv.slipRPM -= 65536}
      if (inv.elecRPM & 32768){ inv.elecRPM -= 65536}
      if (inv.mechRPM & 32768){ inv.mechRPM -= 65536}
      // setIdReading(idReading => [...idReading,[sequenceCount.current, invReading.id]].slice(1))
      setInvReading([
        {
          label: 'Id',
          data: idReading.current
        },
        {
          label: 'Iq',
          data: iqReading.current
        },
        {
          label: 'Ia',
          data: iaReading.current
        },
        {
          label: 'Ib',
          data: ibReading.current
        },
        {
          label: 'Ic',
          data: icReading.current
        }
      ])
      // console.log(invReading)
    };
  },[]);

  // useEffect(() => { 
  //   var inv = invReading

  //   if (inv.id & 32768){ inv.id -= 65536}
  //   if (inv.iq & 32768){ inv.iq -= 65536}
  //   if (inv.ia & 32768){ inv.ia -= 65536}
  //   if (inv.ib & 32768){ inv.ib -= 65536}
  //   if (inv.ic & 32768){ inv.ic -= 65536}
  //   if (inv.slipRPM & 32768){ inv.slipRPM -= 65536}
  //   if (inv.elecRPM & 32768){ inv.elecRPM -= 65536}
  //   if (inv.mechRPM & 32768){ inv.mechRPM -= 65536}
  //   setIdReading(idReading => [...idReading,[sequenceCount.current, invReading.id]].slice(1))
  //   setTest([
  //     {
  //       label: 'Id',
  //       data: idReading
  //     },
  //     {
  //       label: 'Iq',
  //       data: idReading
  //     }
  //   ])
   
  //   //setIdReading(idReading => [...idReading,invReading.id].slice(1))
  // },[invReading]);

  useEffect(() => { 
   console.clear()
   console.log(JSON.stringify(invReading[0])) 
  },[invReading]);

  // useEffect(() => { 
  //   //console.log(idReading)

  // },[idReading]);


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

