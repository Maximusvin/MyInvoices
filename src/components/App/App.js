import { Switch, Route } from 'react-router-dom';
import { Layout } from 'UI/Layout';
import { Invoices, CreateInvoices, EditInvoice } from 'components';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Invoices} />
        <Route path="/create-invoice" component={CreateInvoices} />
        <Route path="/edit-invoice/:id" component={EditInvoice} />
      </Switch>
    </Layout>
  );
}

export default App;
