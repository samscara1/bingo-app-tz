import React from 'react'
import { useDispatch } from 'react-redux'

import { getRandomNums, getCombinations, getActiveTickets, getSum } from '../../store/ticketsSlice'

import Style from './style.module.scss'

export const RandomiseBtn = ({ ticketId, pic, minNums, maxNums, oddEven }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getRandomNums({ ticketId, numOfActive: 4, min: minNums, max: maxNums, oddToggle: oddEven }))
    dispatch(getCombinations ({ticketId}))
    dispatch(getActiveTickets())
    dispatch(getSum())
  }

  return (
    <button 
      className={Style.btn}
      type="button"
      onClick={handleClick}
    >
      {pic}
    </button>
  )
}
