import { Switch, Route } from 'react-router-dom';
// import { Header, Footer, Main, Home, Questions } from 'components';
// import { AuthPage, ContactsPage, UseFulPage } from 'views';
import { Layout } from 'UI/Layout';
import { Invoices, CreateInvoices } from 'components';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Invoices} />
        <Route path="/create-invoice" component={CreateInvoices} />
      </Switch>
    </Layout>
  );
}

export default App;
