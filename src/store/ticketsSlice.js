import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { getArray } from '../helpers/getArray'
import { getTicketCombinations } from '../helpers/getTicketCombinations'

const initialState = {
  editionsNum: 0,
  combinationsTotal: 0,
  tickets: getArray(3, {
    id: nanoid(),
    fieldOne: getArray(20, {
      isActive: false
    }),
    fieldTwo: getArray(20, {
      isActive: false
    }),
    ticketCombinations: 0
  })
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
      }
    },
    getCombinationsPerTicket(state, {payload: ticketId}) {
      const currentTicket = state.tickets.find(({id}) => id === ticketId)
      const fieldOneActive = currentTicket.fieldOne.filter(item => item.isActive).length
      const fieldTwoActive = currentTicket.fieldTwo.filter(item => item.isActive).length
      console.log(getTicketCombinations(fieldOneActive, fieldTwoActive, 4))

    }
  }
})

export const { addTicket, removeTicket, toggleActiveNum, getCombinationsPerTicket } = ticketsSlice.actions

export default ticketsSlice.reducer