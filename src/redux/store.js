import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import invoicesReducer from './invoices/invoicesReducer';
import editInvoiceReducer from './editInvoice/editInvoiceReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  thunk,
];

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    editInvoice: editInvoiceReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
