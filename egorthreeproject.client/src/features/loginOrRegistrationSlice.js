import { createSlice } from '@reduxjs/toolkit';

const loginOrRegistrationSlice = createSlice({
  name: 'toggleLoginOrRegistration',
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleLoginOrRegistration(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleLoginOrRegistration } = loginOrRegistrationSlice.actions;

export default loginOrRegistrationSlice.reducer;