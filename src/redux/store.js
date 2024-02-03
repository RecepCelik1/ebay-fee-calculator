import { configureStore } from '@reduxjs/toolkit'
import optionSlice from './optionSlice'
import priceSlice from './priceSlice'
export const store = configureStore({
  reducer: {
    options : optionSlice,
    prices : priceSlice,
  },
})