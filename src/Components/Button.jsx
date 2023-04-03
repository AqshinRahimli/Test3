import React from 'react'

const Button = ({type,onClick,className,text}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
  )
}

export default Button