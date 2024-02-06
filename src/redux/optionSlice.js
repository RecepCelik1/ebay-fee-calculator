import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  sellerStatusDropdownOptions : { value: 0, label: 'Above Standard'},

  itemCategoryDropdonwOptions : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},

  eBayStore: false,
  ebayStoreDropdownOptions : { value: 1, label: 'Basic Store'},

  internationalSale : false,

  promotedListing : false,
  promotedListingAdRate : 0,

  salesTax : false,
  salesTaxDropdownOptions : { value: 'totalRevenue', label: 'Total Revenue'},
  salesTaxRate : 0,

  otherCosts : false,
  otherCostAmount : 0,

  subCategories : {

    businessAndIndustrialCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},

    coinsAndPaperMoneyCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 4000, reducedFeeRate: 2.35}}, label: 'Other'},

    clothingShoesAndAccessoriesCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0,}, table2 : {mainFeeRate : 12.35, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},

    jewelleryAndWatchesCategory : { value: {table1 : {mainFeeRate : 15, peak : 5000 , reducedFeeRate : 9, insertionFee : 0}, table2 : {mainFeeRate : 13, peak : 5000, reducedFeeRate: 7}}, label: 'Other'},
    
    musicalInstrumentsAndGearCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 10, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},
    
    camerasAndPhotoCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},
    
    cellPhonesAndAccessoriesCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},
    
    computersTabletsAndNetworkingCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},
    
    consumerElectronicsCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},
    
    eBayMotorsCategory : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 11.35, peak : 1000, reducedFeeRate: 2.35}}, label: 'Automotive Tools & Supplies'},
    
    musicCategories : { value: {table1 : {mainFeeRate : 14.95, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 14.95, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},
    
    videoGamesAndConsoles : { value: {table1 : {mainFeeRate : 13.25, peak : 7500 , reducedFeeRate : 2.35, insertionFee : 0}, table2 : {mainFeeRate : 9, peak : 2500, reducedFeeRate: 2.35}}, label: 'Other'},

  },

  

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

      if(action.payload.field === "subCategory") {
        state.subCategories[action.payload.subCategoryField] = action.payload.selectedOption
      }

    }

  },
})


export const { toggleSwitchFunc , optionsInputHandlingFunc , handleDropdownChangeFunc } = optionSlice.actions

export default optionSlice.reducer