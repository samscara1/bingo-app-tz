import React from 'react'
import cn from 'classnames'

import Style from './style.module.scss'

export const TabBtn = ({ title, handleBtnClick, isActive }) => {

  const tabBtn = cn(Style.btn , Style.active, {
    [Style.inactive]: !isActive
  })

  return (
    <button 
      onClick={handleBtnClick}
      className={tabBtn}
      type="button"
    >
      {title}
    </button>
  )
}
