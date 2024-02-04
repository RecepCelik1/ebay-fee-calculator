import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  sellerStatusDropdownOptions : { value: '1', label: 'Above Standard'},

  itemCategoryDropdonwOptions : { value: '0', label: 'Other'},

  eBayStore: false,
  ebayStoreDropdownOptions : { value: '1', label: 'Basic Store'},

  internationalSale : false,

  promotedListing : false,
  promotedListingAdRate : 0,

  salesTax : false,
  salesTaxDropdownOptions : { value: '0', label: 'Total Revenue'},
  salesTaxRate : 0,

  otherCosts : false,
  otherCostAmount : 0,

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
        state.promotedListing === false ? state.promotedListingAdRate = 0 : state.promotedListingAdRate = state.promotedListingAdRate + 0
      }

      if(action.payload === "salesTax"){
        state.salesTax = !state.salesTax
        state.salesTax === false ? state.salesTaxRate = 0 : state.salesTaxRate = state.salesTaxRate + 0
      }

      if(action.payload === "otherCosts"){
        state.otherCosts = !state.otherCosts
        state.otherCosts === false ? state.otherCostAmount = 0 : state.otherCostAmount = state.otherCostAmount + 0
      }

    },

    optionsInputHandlingFunc: (state, action) => {

      if(action.payload.field === "promotedListingAdRate") {
        state.promotedListingAdRate = action.payload.parsedValue
      }

      if(action.payload.field === "salesTaxRate") {
        state.salesTaxRate = action.payload.parsedValue
      }

      if(action.payload.field === "otherCostAmount") {
        state.otherCostAmount = action.payload.parsedValue
      }

    },

    handleDropdownChangeFunc: (state, action) => {

      if(action.payload.field === "sellerStatus") {
        state.sellerStatusDropdownOptions = action.payload.selectedOption
      }

      if(action.payload.field === "itemCategory") {
        state.itemCategoryDropdonwOptions = action.payload.selectedOption
      }

      if(action.payload.field === "eBayStore") {
        state.ebayStoreDropdownOptions = action.payload.selectedOption
      }

      if(action.payload.field === "salesTax") {
        state.salesTaxDropdownOptions = action.payload.selectedOption
      }

    }

  },
})


export const { toggleSwitchFunc , optionsInputHandlingFunc , handleDropdownChangeFunc } = optionSlice.actions

export default optionSlice.reducer