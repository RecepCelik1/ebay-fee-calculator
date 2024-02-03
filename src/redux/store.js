import { configureStore } from '@reduxjs/toolkit'
import optionSlice from './optionSlice'
export const store = configureStore({
  reducer: {
    options : optionSlice,
  },
})