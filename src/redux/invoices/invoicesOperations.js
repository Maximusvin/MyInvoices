import * as invoicesAPI from 'services/invoices-api';
import {
  fetchInvoicesRequest,
  fetchEInvoicesSuccess,
  fetchInvoicesError,
} from './invoicesActions';

export const fetchInvoices = () => async dispatch => {
  dispatch(fetchInvoicesRequest());

  try {
    const invoices = await invoicesAPI.fetchInvoices();
    dispatch(fetchEInvoicesSuccess(invoices));
  } catch (error) {
    dispatch(fetchInvoicesError(error));
  }
};
