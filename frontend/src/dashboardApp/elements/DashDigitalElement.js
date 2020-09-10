import React, { useState, useEffect } from 'react';

export default function DashDigitalElement (props)  {
  const [animating, setAnimating] = useState(false)
  const [onoff, setOnoff] = useState(false)

  const {
    name,
    value,
  } = props

  useEffect(() => {
    // console.log(`value changed: ${name} = ${value}`)
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 1000);
    if (value == 1.0 ) {
      setOnoff(true)
    } else {   
      setOnoff(false)
    }
    return () => clearTimeout(timer);
  }, [value])

  return (
    <div className= {animating ? "dash_text_element-transition" : "dash_text_element-transition2"}>
     {name} = { onoff ? "ligado" : "desligado" }<br></br>
    </div>
  )
}
