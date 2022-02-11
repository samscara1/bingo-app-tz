import React from 'react';
import { useSelector } from 'react-redux';
import { Ticket } from './Ticket/Ticket';
import { nanoid } from 'nanoid';

export const App = () => {
  const tickets = useSelector(state => state.tickets.tickets)
  return (
    <div>
      {
        tickets.map((ticket, i) => {
          return <Ticket key={nanoid()} index={i} id={ticket.id} />
        })
      }
    </div>
  );
}