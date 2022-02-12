import React from 'react'
// import { useDispatch } from 'react-redux';
import cn from 'classnames';
// import { addActiveNum } from '../store/ticketsSlice';
import { useDispatch } from 'react-redux';
// import { addActiveNum, removeActiveNum } from '../store/ticketsSlice';

import Style from './style.module.scss';
import { toggleActiveNum } from '../store/ticketsSlice';

export const Square =  ({ num, isActive, ticketId, field }) => {
  const dispatch = useDispatch()

  const active = cn(Style.square, {
    [Style.active]: isActive
  })

  const handleClick = () => {
    dispatch(toggleActiveNum({ticketId, field, num }))
  }
  return (
    <button 
      onClick={handleClick}
      type="button"
      className={active}
    >
      {num}
    </button>
  )
}
