import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  button: false,
}

export const optionSlice = createSlice({
  name: 'optionSlice',
  initialState,
  reducers: {
    toggleSwitchFunc: (state, action) => {
      state.toggle = !state.toggle
    },
  },
})


export const { toggleSwitchFunc } = optionSlice.actions

export default optionSlice.reducer