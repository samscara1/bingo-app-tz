import { createSlice } from '@reduxjs/toolkit';
import { getTicketCombinations } from '../helpers/getTicketCombinations';

const initialState = {
  ticketsNum: 2,
  fieldOne: 4,
  fieldTwo: 4,
  editions: 1,
  combinations: 2
}

export const multiaddingSlice = createSlice({
  name: 'multiadding',
  initialState,
  reducers: {
    manageTicketsNum(state, action) {
      state.ticketsNum = action.payload
      state.combinations = getTicketCombinations(
        state.fieldOne, state.fieldTwo, 4
      ) * state.ticketsNum * state.editions

      console.log(state.ticketsNum)
    },
    manageFieldOne(state, action) {
      state.fieldOne = action.payload
      state.combinations = getTicketCombinations(
        state.fieldOne, state.fieldTwo, 4
      ) * state.ticketsNum * state.editions
    },
    manageFieldTwo(state, action) {
      state.fieldTwo = action.payload
      state.combinations = getTicketCombinations(
        state.fieldOne, state.fieldTwo, 4
      ) * state.ticketsNum * state.editions
    },
    manageEditions(state, action) {
      state.editions = action.payload
      state.combinations = getTicketCombinations(
        state.fieldOne, state.fieldTwo, 4
      ) * state.ticketsNum * state.editions
    }
  }
})

export const { manageTicketsNum, manageFieldOne, manageFieldTwo, manageEditions, getCombinations } = multiaddingSlice.actions

export default multiaddingSlice.reducer