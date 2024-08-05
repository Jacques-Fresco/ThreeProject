import { configureStore } from '@reduxjs/toolkit';
import toggleLoginOrRegistrationReducer from '../features/loginOrRegistrationSlice'; 

const store = configureStore({
  reducer: {
    toggleLoginOrRegistration: toggleLoginOrRegistrationReducer,
  },
});

export default store;