import { createSlice } from '@reduxjs/toolkit'
import { getSquares } from '../helpers/getSquares'

const initialState = {
  squaresNum: getSquares(20),
  editionsNum: 0,
  ticketsNum: 3,
  combinationsTotal: 0,
  ticketsFullfilled: []
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
  },
})

// export const { } = ticketsSlice.actions

export default ticketsSlice.reducer