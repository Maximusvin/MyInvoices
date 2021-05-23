import * as invoicesAPI from 'services/invoices-api';
import {
  fetchInvoiceRequest,
  fetchInvoiceSuccess,
  fetchInvoiceError,
} from './editInvoiceActions';

export const fetchEditInvoice = id => async dispatch => {
  dispatch(fetchInvoiceRequest());

  try {
    const editInvoice = await invoicesAPI.fetchInvoiceById(id);
    dispatch(fetchInvoiceSuccess(editInvoice));
  } catch (error) {
    dispatch(fetchInvoiceError(error));
  }
};
