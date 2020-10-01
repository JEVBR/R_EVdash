import React, { useState, useMemo} from 'react';
import { Chart } from "react-charts";

export default function DashBoard ({invReading})  {
  const series = useMemo(
    () => ({
      showPoints: false      
    }),
    []
  );
  const axes = useMemo(
    () => [
      { primary: true, position: "bottom", type: "linear" },
      { position: "left", type: "linear", stacked: false }
    ],
    []
  );
  const data = React.useMemo(
    () => invReading,
    [invReading]
  )

   return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <Chart data={data} series={series} axes={axes} tooltip />
        </div>
        <div className="col-sm-3">
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
      </div>
    </div>
  )
}
