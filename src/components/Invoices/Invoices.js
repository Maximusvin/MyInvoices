import { SectionWrap } from 'UI/SectionWrap';
import { InvoicesWrap, Button } from './Invoices.style';

const Invoices = () => {
  return (
    <InvoicesWrap>
      <SectionWrap title={'Actions'}>
        <Button>Add new</Button>
      </SectionWrap>
      <SectionWrap title={'Invoices'}>
        <h2>Table</h2>
      </SectionWrap>
    </InvoicesWrap>
  );
};

export default Invoices;
