import { configureStore } from '@reduxjs/toolkit';
import toggleLoginOrRegistrationReducer from '../features/loginOrRegistrationSlice';
import authReducer from '../features/authSlice';
import profileMenuReducer from '../features/profileMenuSlice';

const store = configureStore({
  reducer: {
    toggleLoginOrRegistration: toggleLoginOrRegistrationReducer,
    auth: authReducer,
    profileMenu: profileMenuReducer,
  },
});

export default store;