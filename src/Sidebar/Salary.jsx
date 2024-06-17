import React from 'react'
import Button from './Button'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
        <h4 className='text-lg text-emerald-600 font-medium mb-2'>Salary</h4>
        <div className='flex flex-wrap gap-2 md:gap-4'>
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
        </div>
    </div>
  )
}

export default Salary