import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', true);
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
    setAuthStatus(state, action) {
      state.isAuthenticated = action.payload;
      localStorage.setItem('isAuthenticated', action.payload);
    },
  },
});

export const { login, logout, setAuthStatus } = authSlice.actions;

export default authSlice.reducer;