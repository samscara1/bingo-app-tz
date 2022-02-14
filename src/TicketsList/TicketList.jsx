import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import { Ticket } from '../Ticket/Ticket'

import Style from './style.module.scss'

export const TicketList = () => {
  const tickets = useSelector(state => state.tickets.tickets)
  return (
    <section className={Style.ticketList}>
      {
        tickets.map((ticket, i) => {
          return <Ticket key={nanoid()} index={i} id={ticket.id} fieldOne={ticket.fieldOne} fieldTwo={ticket.fieldTwo} />
        })
      }
    </section>
  )
}
