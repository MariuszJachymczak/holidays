import React from 'react'
import "./TextField.css"
 const TextField = ({handleOnChange, value, placeholder, type}) => {
  return (
     
    <input
        className="text-field"
        type={type}
        onChange={handleOnChange}
        value={value}
        placeholder={placeholder}
    />
  )
}


export default TextField