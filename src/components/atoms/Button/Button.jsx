import React from 'react'

function Button({label, type, onClick}) {
  return (
    <button
        type={type}
        onClick={onClick}
    > 
        {label}
    </button>
  )
}

export default Button