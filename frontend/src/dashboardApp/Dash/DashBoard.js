import React, { useState, useEffect } from 'react';

export default function DashBoard ()  {
  const [data, setData] = useState([]) 

  useEffect(() => { 
    console.log('---------------------------- DATA -----------------------------------')
    console.log(data)
    console.log('---------------------------------------------------------------------')
  },[data]);

   return (
    <div>Dash</div>
  )
}
