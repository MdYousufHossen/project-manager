import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSlice from '../features/auth/authSlice';
import projectSlice from '../features/project/projectSlice';


export const store = configureStore({
  reducer: {
   [apiSlice.reducerPath]:apiSlice.reducer,
   auth:authSlice,
   project:projectSlice
  },
  devTools:process.env.NODE_ENV!=="production",
  middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware)
});
