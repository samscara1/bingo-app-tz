/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { getArray } from '../helpers/getArray'
import { getTicketCombinations } from '../helpers/getTicketCombinations'
import { getTickets } from '../helpers/getTickets'
import { randomise } from '../helpers/randomise'

const initialState = {
  sum: 0,
  activeTicketsNum: 0,
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
      }
    },
    getCombinations(state, {payload: {ticketId}}) {
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
    },
    getRandomNums(state, {payload: {ticketId, numOfActive, min, max, oddToggle}}) {
      const currentTicket = state.tickets.find(({id}) => id === ticketId)
      if (currentTicket) {
        state.tickets.find(({id}) => id === ticketId).fieldOne.forEach((num) => {num.isActive = false})
        state.tickets.find(({id}) => id === ticketId).fieldTwo.forEach((num) => {num.isActive = false})
        randomise(min, max, numOfActive, oddToggle).forEach((num, index) => {
          state.tickets.find(({id}) => id === ticketId).fieldOne[num].isActive = true
        })
        randomise(min, max, numOfActive, oddToggle).forEach((num, index) => {
          state.tickets.find(({id}) => id === ticketId).fieldTwo[num].isActive = true
        })
      }
    },
    getActiveTickets(state) {
      state.activeTicketsNum = 0
      state.tickets.forEach(({ticketCombinations}) => {
        if(ticketCombinations > 0) {
          state.activeTicketsNum += 1
        }
      })
    },
    getEditions(state, {payload}) {
      state.editionsNum = payload
    },
    getSum(state) {
      if (state.combinationsTotal === 0) {
        state.combinationsTotal = 1
      } else if (state.editionsNum === 0) {
        state.editionsNum = 1
      }
      state.sum = state.combinationsTotal * state.editionsNum * 150
    },
    clearActiveNums(state, {payload: {ticketId}}) {
      state.tickets.find(({id}) => id === ticketId).fieldOne.forEach((num) => {num.isActive = false})
      state.tickets.find(({id}) => id === ticketId).fieldTwo.forEach((num) => {num.isActive = false})
    }
  }
})

export const { addTicket, removeTicket, toggleActiveNum, getCombinations, getRandomNums, getActiveTickets, getEditions, getSum, clearActiveNums } = ticketsSlice.actions

export default ticketsSlice.reducer