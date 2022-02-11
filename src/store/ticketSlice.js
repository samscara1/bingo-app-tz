import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  editionsNum: 0,
  combinationsNum: 0,
  tickets: []
}

export const ticketsSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
})

// export const { } = ticketsSlice.actions

export default ticketsSlice.reducer