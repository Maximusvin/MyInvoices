import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4030';

export async function fetchInvoices() {
  const { data } = await axios.get(`/invoices`);
  return data;
}

export async function createInvoice(invoice) {
  await axios.post(`/invoices`, invoice);
}

// export async function createInvoice(invoice) {
//   const options = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(invoice),
//   };
//   return await fetch(`http://localhost:4030/invoices`, options).then(res =>
//     res.json(),
//   );
// }
