import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchInvoicesRequest,
  fetchEInvoicesSuccess,
  fetchInvoicesError,
} from './invoicesActions';

const entities = createReducer([], {
  [fetchEInvoicesSuccess]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchInvoicesRequest]: () => true,
  [fetchEInvoicesSuccess]: () => false,
  [fetchInvoicesError]: () => false,
});

const error = createReducer(null, {
  [fetchInvoicesError]: (_, { payload }) => payload,
  [fetchInvoicesRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
