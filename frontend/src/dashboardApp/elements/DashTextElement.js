import React, { useState, useEffect } from 'react';

export default function DashTextElement (props)  {
  const [animating, setAnimating] = useState(false)

  const {
    name,
    value,
    eng_units,
  } = props

  useEffect(() => {
    console.log(`value changed: ${name} = ${value}`)
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [value])

  return (
    <div className= {animating ? "dash_text_element-transition" : "dash_text_element-transition2"}>
     {name} Valor = {parseFloat(value).toFixed(2)} {eng_units}<br></br>
    </div>
  )
}
