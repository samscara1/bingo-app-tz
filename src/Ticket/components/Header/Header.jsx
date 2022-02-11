import React from 'react'
import { useDispatch } from 'react-redux'
import { addTicket } from '../../../store/ticketsSlice'

export const Header = ({ ticketNum }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addTicket())
  }
  return (
    <header>
      {
        (ticketNum === 0) ?
        <div>
          <span>
            Отметьте не менее 4 чисел в каждом поле
          </span>
          <button onClick={handleClick}>
            + Добавить билет
          </button>
        </div> :
        <span>
          Билет № {ticketNum+1}
        </span>
      }
    </header>
  )
}
