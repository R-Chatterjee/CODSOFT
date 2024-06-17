import React from 'react'

const Input = ({handleChange,value,title,name}) => {
  return (
    <label className='sidebar-label-container'>
        <input type='radio' name={name} value={value} onChange={handleChange}/>
        <span className='checkmark'></span>
        <span className='text-emerald-800'>{title}</span>
    </label>
  )
}

export default Input