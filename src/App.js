import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Ticket } from './Ticket/Ticket'

export const App = () => {
  const tickets = useSelector(state => state.tickets.tickets)
  return (
    <div>
      {
        tickets.map((ticket, i) => {
          return <Ticket key={nanoid()} index={i} id={ticket.id} fieldOne={ticket.fieldOne} fieldTwo={ticket.fieldTwo} />
        })
      }
    </div>
  );
}