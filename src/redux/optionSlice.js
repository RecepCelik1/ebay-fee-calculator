import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  eBayStore: false,
  internationalSale : false,
  promotedListing : false,
  salesTax : false,
  otherCosts : false,
}

export const optionSlice = createSlice({
  name: 'optionSlice',
  initialState,
  reducers: {
    toggleSwitchFunc: (state, action) => {

      if(action.payload === "eBayStore"){
        state.eBayStore = !state.eBayStore
      }

      if(action.payload === "internationalSale"){
        state.internationalSale = !state.internationalSale
      }

      if(action.payload === "promotedListing"){
        state.promotedListing = !state.promotedListing
      }

      if(action.payload === "salesTax"){
        state.salesTax = !state.salesTax
      }

      if(action.payload === "otherCosts"){
        state.otherCosts = !state.otherCosts
      }

    },
  },
})


export const { toggleSwitchFunc } = optionSlice.actions

export default optionSlice.reducer