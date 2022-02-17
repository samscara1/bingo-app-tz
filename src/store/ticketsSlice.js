/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, current } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { getArray } from '../helpers/getArray'
import { getTicketCombinations } from '../helpers/getTicketCombinations'
import { getTickets } from '../helpers/getTickets'
import { randomise } from '../helpers/randomise'

const initialState = {
  alert: false,
  sum: 0,
  activeTicketsNum: 0,
  editionsNum: 1,
  combinationsTotal: 0,
  nextCombination: 0,
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
      // console.log('fieldOne', fieldOneActive)
      // console.log('fieldTwo', fieldTwoActive)
      if (fieldOneActive >= 4 && fieldTwoActive >= 4) {
        state
          .tickets
          .find(({id}) => id === ticketId)
          .ticketCombinations = getTicketCombinations(fieldOneActive, fieldTwoActive, 4)
      } else {
        state
          .tickets
          .find(({id}) => id === ticketId)
          .ticketCombinations = 0
      }
      const combArray = []
      state.tickets.forEach(({ticketCombinations}) => {combArray.push(ticketCombinations)})
      state.combinationsTotal = combArray.reduce((a, b) => a + b, 0);
    },
    getNextCombination(state, {payload: {ticketId, field}}) {
      const currentTicket = state.tickets.find(({id}) => id === ticketId)
      let fieldOneActive = currentTicket.fieldOne.filter(item => item.isActive).length
      if (field === 'fieldOne') {
        fieldOneActive += 1
      }
      let fieldTwoActive = currentTicket.fieldTwo.filter(item => item.isActive).length
      if (field === 'fieldTwo') {
        fieldTwoActive += 1
      }
      const nextTicketCombination =  getTicketCombinations(fieldOneActive, fieldTwoActive, 4)
      const combArray = [nextTicketCombination]
      const filtered = state.tickets.filter(ticket => ticket.id !== ticketId)
      filtered.forEach(({ticketCombinations}) => combArray.push(ticketCombinations))
      state.nextCombination = combArray.reduce((a, b) => a + b, 0);
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
      if(state.combinationsTotal > 0) {
        state.sum = state.combinationsTotal * state.editionsNum * 150
      }

    },
    clearActiveNums(state, {payload: {ticketId}}) {
      state.tickets.find(({id}) => id === ticketId).fieldOne.forEach((num) => {num.isActive = false})
      state.tickets.find(({id}) => id === ticketId).fieldTwo.forEach((num) => {num.isActive = false})
      state.nextCombination = state.combinationsTotal
    },
    manageSquare(state, {payload: {ticketId, field, num}}) {
      ticketsSlice.caseReducers.getNextCombination(state, {payload: {ticketId, field}})
      if (state.nextCombination * 150 < 300000) {
        ticketsSlice.caseReducers.toggleActiveNum(state, {payload: {ticketId, field, num }})
        ticketsSlice.caseReducers.getCombinations(state, {payload: {ticketId}})
        ticketsSlice.caseReducers.getActiveTickets(state)
        ticketsSlice.caseReducers.getSum(state)
        ticketsSlice.caseReducers.getNextCombination(state, {payload: {ticketId, field}})
      } else if (state.tickets.find(({id}) => id === ticketId)[field][num-1].isActive && state.nextCombination * 150 >= 300000){
        ticketsSlice.caseReducers.toggleActiveNum(state, {payload: {ticketId, field, num }})
        ticketsSlice.caseReducers.getCombinations(state, {payload: {ticketId}})
        ticketsSlice.caseReducers.getActiveTickets(state)
        ticketsSlice.caseReducers.getSum(state)
        ticketsSlice.caseReducers.getNextCombination(state, {payload: {ticketId, field}})
      } else {
        state.alert = true
      }
    },
    showAlert (state) {
      state.alert = true
    },
    hideAlert(state) {
      state.alert = false
    }
  }
})

export const { 
  addTicket, 
  removeTicket, 
  toggleActiveNum, 
  getCombinations, 
  getNextCombination,
  getRandomNums, 
  getActiveTickets, 
  getEditions,
  getSum, 
  clearActiveNums,
  manageSquare,
  showAlert,
  hideAlert
} = ticketsSlice.actions

export default ticketsSlice.reducer