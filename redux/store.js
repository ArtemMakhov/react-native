import { configureStore,combineReducers } from '@reduxjs/toolkit';

import {authSlice} from './auth/authSlice';

// const redusers = combineReducers({
//  auth: authSlice.reducer,
// })

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
 }
});


