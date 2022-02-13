import React from 'react'
import { useDispatch } from 'react-redux'
import { getRandomNums } from '../store/ticketsSlice'

export const Footer = ({ ticketId }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(getRandomNums({ticketId}))
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
