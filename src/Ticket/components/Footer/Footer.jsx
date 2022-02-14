import React from 'react'
import { useDispatch } from 'react-redux'
import { clearActiveNums, getCombinations, getActiveTickets, getSum } from '../../../store/ticketsSlice'
import { Cross } from '../../../svgComponents/Cross'
import { Button } from '../../../UI/Button/Button'

import { RandomPanel } from './components/RandomPanel/RandomPanel'

import Style from './style.module.scss'

export const Footer = ({ ticketId, activeFieldOne, activeFieldTwo }) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clearActiveNums({ticketId}))
    dispatch(getCombinations ({ticketId}))
    dispatch(getActiveTickets())
    dispatch(getSum())
  }

  return (
    <footer className={Style.footer}>
      <RandomPanel ticketId={ticketId} />
      {(activeFieldOne.length > 0 || activeFieldTwo.length > 0) && <Button title="Очистить" pic={<Cross />} handleClick={handleClick} />}
    </footer>
  )
}
