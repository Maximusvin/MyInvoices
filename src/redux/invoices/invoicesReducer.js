import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchInvoicesRequest,
  fetchInvoicesSuccess,
  fetchInvoicesError,
} from './invoicesActions';

const entities = createReducer([], {
  [fetchInvoicesSuccess]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchInvoicesRequest]: () => true,
  [fetchInvoicesSuccess]: () => false,
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
