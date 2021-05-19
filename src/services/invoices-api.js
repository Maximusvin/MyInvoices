import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchInvoices() {
  const { data } = await axios.get(`/invoices`);
  return data;
}
