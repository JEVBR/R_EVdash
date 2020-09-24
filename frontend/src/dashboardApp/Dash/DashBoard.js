import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Arrow from '@elsdoerfer/react-arrow';

export default function DashBoard ({invReading})  {
  // const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(true)
 
  // useEffect(() => { 
  //   console.log(invReading.id)
  // },[invReading]);

   return (
    <div className="sweet-loading">
      <Arrow
        angle={0}
        length={parseInt(invReading.id)}
        style={{
          width: '100px'
        }}
      />
       <Arrow
        angle={90}
        length={parseInt(invReading.iq)}
        style={{
          width: '100px'
        }}
      />
          <br></br>

          id = {invReading.id} <br></br>
          idref = {invReading.idref} <br></br>
          <br></br>
          iq = {invReading.iq} <br></br>
          iqref = {invReading.iqref} <br></br>
          <br></br>
          ia = {invReading.ia} <br></br>
          ib = {invReading.ib} <br></br>
          ic = {invReading.ic} <br></br>  
          <br></br>
          pctV = {invReading.pctV} <br></br>
          <br></br>
          Rthr = {invReading.Rthr} <br></br>
          thr = {invReading.thr} <br></br>
          <br></br>
          slipRPM = {invReading.slipRPM} <br></br>
          elecRPM = {invReading.elecRPM} <br></br>
          mechRPM = {invReading.mechRPM} <br></br>
          <br></br>
          POSCNT = {invReading.POSCNT} <br></br>

    </div>
  )
}
