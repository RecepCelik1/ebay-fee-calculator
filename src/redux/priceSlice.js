import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemSoldPrice: 0,
  itemCost: 0,
  shippingCharge: 0,
  shippingCost: 0
}

export const priceSlice = createSlice({
  name: 'priceSlice',
  initialState,
  reducers: {
    handlingPricesFunc: (state, action) => {
      
        if(action.payload.field === "itemSoldPrice"){
            state.itemSoldPrice = action.payload.parsedValue
        }

        if(action.payload.field === "itemCost"){
            state.itemCost = action.payload.parsedValue
        }

        if(action.payload.field === "shippingCharge"){
            state.shippingCharge = action.payload.parsedValue
        }

        if(action.payload.field === "shippingCost"){
            state.shippingCost = action.payload.parsedValue
        }

    },
  },
})


export const { handlingPricesFunc } = priceSlice.actions

export default priceSlice.reducer