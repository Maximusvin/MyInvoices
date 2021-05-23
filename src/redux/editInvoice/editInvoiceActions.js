import { createAction } from '@reduxjs/toolkit';

export const fetchInvoiceRequest = createAction(
  'editInvoice/fetchInvoiceRequest',
);

export const fetchInvoiceSuccess = createAction(
  'editInvoice/fetchInvoiceSuccess',
);

export const fetchInvoiceError = createAction('editInvoice/fetchInvoiceError');
