
import { Bar } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react';

export default function DashBarElement (props)  {
  const {
    name,
    value,
    min,
    max,
    eng_units
  } = props
  
  const [data, setData] = useState()

  useEffect(() => {
    setData({
      labels: [name],
      datasets: [{
        label: eng_units,

        backgroundColor: [
          'rgba(32, 63, 73, 1)'
        ],
        borderColor: [
          'rgba(185, 198, 51, 1)'
        ],
        borderWidth: 1,
        data: [value]
      }]  
    })
  }, [value])

  return (
    <div>
      { data && < Bar
          data={data}
          options = {{
            scales: {
              xAxes: [{}, {
                id: 'x-axis',
                type: 'bar',
                position: 'bottom',
                display: false,
              }],
              yAxes: [{
                ticks: {
                  min: min,
                  max: max
                }
              }]
            }      
          }}
       />
      } 
    </div>
  );
}


