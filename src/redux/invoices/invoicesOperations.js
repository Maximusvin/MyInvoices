import * as invoicesAPI from 'services/invoices-api';
import {
  fetchInvoicesRequest,
  fetchInvoicesSuccess,
  fetchInvoicesError,
} from './invoicesActions';

export const fetchInvoices = () => async dispatch => {
  dispatch(fetchInvoicesRequest());

  try {
    const invoices = await invoicesAPI.fetchInvoices();
    dispatch(fetchInvoicesSuccess(invoices));
  } catch (error) {
    dispatch(fetchInvoicesError(error));
  }
};
