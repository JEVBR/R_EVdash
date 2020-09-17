import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Arrow from '@elsdoerfer/react-arrow';

export default function DashBoard ({data})  {
  // const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(true)
  useEffect(() => { 
    console.log('---------------------------- DATA -----------------------------------')
    console.log(data)
    console.log('---------------------------------------------------------------------')
  },[data]);

   return (
    <div className="sweet-loading">
      <ClipLoader
        size={150}
        color={"#123abc"}
        loading={loading}
      />
      <Arrow
        angle={45}
        length={100}
        style={{
          width: '100px'
        }}
      />
    </div>
  )
}
