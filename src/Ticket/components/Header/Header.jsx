import React from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames';

import { addTicket } from '../../../store/ticketsSlice'

import { Add } from '../../../svgComponents/Add'
import { Button } from '../../../UI/Button/Button'

import Style from './style.module.scss'

export const Header = ({ ticketNum }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addTicket())
  }

  const ticketHeader = cn(Style.heading, {
    [Style.number]: ticketNum
  })

  return (
    <header className={Style.container}>
      {
        (ticketNum === 0) ?
          <div className={ticketHeader}>
            <span>
            Отметьте не менее 4 чисел в каждом поле
            </span>
            <Button 
              pic={<Add />}
              title="Добавить билет"
              handleClick={handleClick}
            />
          </div> :
          <span className={ticketHeader}>
          Билет № {ticketNum+1}
          </span>
      }
    </header>
  )
}
