import React from 'react'

import { Minus } from '../../../svgComponents/Minus'
import { Plus } from '../../../svgComponents/Plus'

import Style from './style.module.scss'

export const NumberSelect = ({ min, max, value, handleClick }) => {

  const handleChange = (e) => {
    handleClick(e.target.value)
  }

  const handlePlus = () => {
    let calcValue = value + 1
    if (calcValue > max) {
      calcValue = max
    }
    handleClick(calcValue)
  }

  const handleMinus = () => {
    let calcValue = value - 1
    if (calcValue < min) {
      calcValue = min
    }
    handleClick(calcValue)
  }

  return (
    <div className={Style.container}>
      <button
        onClick={handleMinus}
        type="button"
        className={Style.btn}
      >
        <Minus />
      </button>
      <input 
        value={value}
        onChange={handleChange}
        type="number" 
        min={min} 
        max={max} />
      <button
        onClick={handlePlus}
        className={Style.btn}
        type="button"
      >
        <Plus />
      </button>
    </div>
  )
}
