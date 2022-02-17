import React from 'react'
import cn from 'classnames';
import { useDispatch } from 'react-redux';


import Style from './style.module.scss';
import { 
  manageSquare
} from '../store/ticketsSlice';

export const Square =  ({ num, isActive, ticketId, field }) => {
  const dispatch = useDispatch()

  const active = cn(Style.square, {
    [Style.active]: isActive
  })

  const handleClick = async () => {
    dispatch(manageSquare({ticketId, field, num}))
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
