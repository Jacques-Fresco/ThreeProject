import { createSlice } from '@reduxjs/toolkit';

const profileMenuSlice = createSlice({
  name: 'profileMenu',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleProfileMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeProfileMenu(state) {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleProfileMenu, closeProfileMenu } = profileMenuSlice.actions;

export default profileMenuSlice.reducer;