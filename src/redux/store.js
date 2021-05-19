import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import invoicesReducer from './invoices/invoicesReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  thunk,
];

export const store = configureStore({
  reducer: { invoices: invoicesReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
