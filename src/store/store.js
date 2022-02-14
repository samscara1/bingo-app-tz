import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice'
import multiaddingReducer from './multiaddingSlice'

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    multiadding: multiaddingReducer
  }
})