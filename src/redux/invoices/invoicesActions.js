import { createAction } from '@reduxjs/toolkit';

export const fetchInvoicesRequest = createAction(
  'invoices/fetchInvoicesRequest',
);

export const fetchInvoicesSuccess = createAction(
  'invoices/fetchInvoicesSuccess',
);

export const fetchInvoicesError = createAction('invoices/fetchInvoicesError');
