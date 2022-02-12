import { createSlice, current } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { getArray } from '../helpers/getArray'
import { getTicketCombinations } from '../helpers/getTicketCombinations'
import { getTickets } from '../helpers/getTickets'

const initialState = {
  editionsNum: 0,
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
          fieldOne: getArray(20, {
            isActive: false
          }),
          fieldTwo: getArray(20, {
            isActive: false
          }),
          ticketCombinations: 0
        }
      )
    },
    toggleActiveNum(state, {payload: {ticketId, field, num }}) {
      const currentTicket = state.tickets.find(({id}) => id === ticketId)
      if (currentTicket) {
        const currentIsActive = state.tickets.find(({id}) => id === ticketId)[field][num-1].isActive 
        state.tickets.find(({id}) => id === ticketId)[field][num-1].isActive = !currentIsActive
        console.log(current(state.tickets.find(({id}) => id === ticketId)[field][num-1]))
      }
    },
    getCombinations(state, {payload: ticketId}) {
      const currentTicket = state.tickets.find(({id}) => id === ticketId)
      const fieldOneActive = currentTicket.fieldOne.filter(item => item.isActive).length
      const fieldTwoActive = currentTicket.fieldTwo.filter(item => item.isActive).length
      state
        .tickets
        .find(({id}) => id === ticketId)
        .ticketCombinations = getTicketCombinations(fieldOneActive, fieldTwoActive, 4)
      const combArray = []
      state.tickets.forEach(({ticketCombinations}) => {combArray.push(ticketCombinations)})
      state.combinationsTotal = combArray.reduce((a, b) => a + b, 0);
      console.log(state.combinationsTotal)
    }
  }
})

export const { addTicket, removeTicket, toggleActiveNum, getCombinations } = ticketsSlice.actions

export default ticketsSlice.reducer