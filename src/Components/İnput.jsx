import React from 'react'


const İnput = ({ placeholder, type,onChange }) => {
  return (
    <div className='input'>
      <input placeholder={placeholder} type={type} onChange={onChange}/>
    </div>
  )
}

export default İnput