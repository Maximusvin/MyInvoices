import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4030';

export async function fetchInvoices() {
  const { data } = await axios.get(`/invoices`);
  return data;
}

export async function fetchInvoiceById(id) {
  const { data } = await axios.get(`/invoices/${id}`);
  return data;
}

export async function createInvoice(invoice) {
  await axios.post(`/invoices`, invoice);
}

export async function deleteInvoice(id) {
  await axios({
    method: 'DELETE',
    url: `http://localhost:4030/invoices/${id}`,
  });
}

export async function editInvoice(id, invoice) {
  await axios.patch(`/invoices/${id}`, invoice);

  // await axios({
  //   method: 'PATCH',
  //   url: `http://localhost:4030/invoices/${id}`,
  // });
}
