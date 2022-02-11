import { createSlice } from '@reduxjs/toolkit'
import { getSquares } from '../helpers/getSquares'
import { getTickets } from '../helpers/getTickets'
import { nanoid } from 'nanoid'

const initialState = {
  squaresNum: getSquares(20),
  editionsNum: 0,
  ticketsNum: 3,
  combinationsTotal: 0,
  tickets: getTickets(3)
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTicket(state) {
      state.tickets.push(
        {
          id: nanoid(),
          fieldOne: [],
          fieldTwo: [],
          TicketCombinations: 0,
        }
      )
    }
  },
})

export const { addTicket } = ticketsSlice.actions

export default ticketsSlice.reducer