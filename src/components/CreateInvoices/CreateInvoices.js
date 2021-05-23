import { AppBar, InvoicesForm } from 'components';
import { SectionWrap } from 'UI/SectionWrap';
import { InvoicesWrap } from './CreateInvoices.style';

const CreateInvoices = () => {
  return (
    <InvoicesWrap>
      <AppBar>Create Invoice</AppBar>

      <SectionWrap>
        <InvoicesForm />
      </SectionWrap>
    </InvoicesWrap>
  );
};

export default CreateInvoices;
