import React, { useState } from 'react'

import style from './style.module.scss';

export const Square = ({ title }) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <button 
      className={isActive ? (`${style.square} ${style.active}`) : `${style.square}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
