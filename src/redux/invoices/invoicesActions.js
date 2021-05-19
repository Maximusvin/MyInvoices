import { createAction } from '@reduxjs/toolkit';

export const fetchInvoicesRequest = createAction(
  'invoices/fetchInvoicesRequest',
);

export const fetchEInvoicesSuccess = createAction(
  'invoices/fetchEInvoicesSuccess',
);

export const fetchInvoicesError = createAction('invoices/fetchInvoicesError');
