import React from 'react'

import Style from './style.module.scss'

export const Button = ({ title, pic, handleClick }) => {
  return (
    <button 
      className={Style.btn}
      type="button"
      onClick={handleClick}
    >
      {pic}
      {title}
    </button>
  )
}
