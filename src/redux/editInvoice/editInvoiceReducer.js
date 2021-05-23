import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchInvoiceRequest,
  fetchInvoiceSuccess,
  fetchInvoiceError,
} from './editInvoiceActions';

const invoice = createReducer(
  {},
  {
    [fetchInvoiceSuccess]: (_, { payload }) => payload,
  },
);

const isLoading = createReducer(false, {
  [fetchInvoiceRequest]: () => true,
  [fetchInvoiceSuccess]: () => false,
  [fetchInvoiceError]: () => false,
});

const error = createReducer(null, {
  [fetchInvoiceError]: (_, { payload }) => payload,
  [fetchInvoiceRequest]: () => null,
});

export default combineReducers({
  invoice,
  isLoading,
  error,
});
