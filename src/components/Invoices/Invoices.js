import { useEffect } from 'react';
import { Table, AppBar } from 'components';
import { SectionWrap } from 'UI/SectionWrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInvoices } from 'redux/invoices/invoicesOperations';
import { getAllInvoices } from 'redux/invoices/invoicesSelectors';
import { InvoicesWrap, Button } from './Invoices.style';

const Invoices = () => {
  const dispatch = useDispatch();
  const invoices = useSelector(getAllInvoices);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <InvoicesWrap>
      <AppBar>Invoices</AppBar>

      <SectionWrap title={'Actions'}>
        <Button to="/create-invoice">Add new</Button>
      </SectionWrap>

      {invoices && (
        <SectionWrap title={'Invoices'}>
          <Table invoices={invoices} />
        </SectionWrap>
      )}
    </InvoicesWrap>
  );
};

export default Invoices;
