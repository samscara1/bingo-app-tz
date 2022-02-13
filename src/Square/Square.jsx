import React from 'react'
import cn from 'classnames';
import { useDispatch } from 'react-redux';


import Style from './style.module.scss';
import { getActiveTickets, getCombinations, getSum, toggleActiveNum } from '../store/ticketsSlice';

export const Square =  ({ num, isActive, ticketId, field }) => {
  const dispatch = useDispatch()

  const active = cn(Style.square, {
    [Style.active]: isActive
  })

  const handleClick = () => {
    dispatch(toggleActiveNum({ticketId, field, num }))
    dispatch(getCombinations ({ticketId}))
    dispatch(getActiveTickets())
    dispatch(getSum())
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
