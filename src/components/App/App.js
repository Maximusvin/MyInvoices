// import { Route } from 'react-router-dom';
// import { Header, Footer, Main, Home, Questions } from 'components';
// import { AuthPage, ContactsPage, UseFulPage } from 'views';
import { Layout } from 'UI/Layout';
import { AppBar, Invoices } from 'components';

function App() {
  return (
    <Layout>
      <AppBar />
      <Invoices />
    </Layout>
  );
}

export default App;
