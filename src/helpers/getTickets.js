import { nanoid } from 'nanoid';

export const getTickets = (num) => {
  let ticketArray = Array(num).fill(
    {
      id: nanoid(),
      fieldOne: [],
      fieldTwo: [],
      TicketCombinations: 0,
    }
  )
  return ticketArray
}