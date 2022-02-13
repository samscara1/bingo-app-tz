import React from 'react'
import { useDispatch } from 'react-redux'
import { getRandomNums } from '../../../store/ticketsSlice'

export const Footer = ({ ticketId }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(getRandomNums({ ticketId, numOfActive: 4, min: 1, max: 20, oddToggle: 'even'}))
  }
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}

      >random</button>
    </div>
  )
}
