import { Switch, Route } from 'react-router-dom';
import { Layout } from 'UI/Layout';
import {
  Invoices,
  CreateInvoices,
  EditInvoice,
  NotFoundPage,
} from 'components';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/MyInvoices/" exact component={Invoices} />
        <Route path="/MyInvoices/create-invoice" component={CreateInvoices} />
        <Route path="/MyInvoices/edit-invoice/:id" component={EditInvoice} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}

export default App;
