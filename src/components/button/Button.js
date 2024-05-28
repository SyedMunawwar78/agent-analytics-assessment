import React from 'react'
import "./button.css"

function Button({title , className , onClick , disabled}) {
  return (
    <button onClick={onClick} className={`button ${className} ${disabled && "disabled"}`} disabled={disabled}>{title}</button>
  )
}

export default Button