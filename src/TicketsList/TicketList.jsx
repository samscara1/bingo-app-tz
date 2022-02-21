import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'

import { addTicket } from '../store/ticketsSlice'

import { Ticket } from '../Ticket/Ticket'

import Style from './style.module.scss'

export const TicketList = ({ showAlert }) => {
  const tickets = useSelector(state => state.tickets.tickets)
  const dispatch = useDispatch()
  return (
    <section className={Style.ticketList}>
      {
        tickets.map((ticket, i) => {
          return (
            <Ticket 
              key={nanoid()} 
              index={i} 
              id={ticket.id} 
              fieldOne={ticket.fieldOne} 
              fieldTwo={ticket.fieldTwo} 
              showAlert={showAlert} 
            />)
        })
      }
      <button
        className={Style.addBtn}
        type="button"
        onClick={() => dispatch(addTicket())}
      >
          Добавить еще
      </button>
    </section>
  )
}
