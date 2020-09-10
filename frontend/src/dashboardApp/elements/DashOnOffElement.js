import React, { useState, useEffect } from 'react';

export default function DashOnOffElement (props)  {
  const [animating, setAnimating] = useState(false)

  const {
    name,
    value,
  } = props

  useEffect(() => {
    console.log(`value changed: ${name} = ${value}`)
    if (value === 1.0 ) {
      setAnimating(true)
    } else {   
      setAnimating(false)
    }
  }, [value])

  return (
    <>
      
      <div className= {animating ? "lds-dual-ring" : "lds-dual-ring-stop"}>
        {name} <br></br>
      </div>
    </>
  )
}
