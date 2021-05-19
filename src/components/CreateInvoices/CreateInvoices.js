import { AppBar } from 'components';
import { SectionWrap } from 'UI/SectionWrap';
import { useDispatch } from 'react-redux';

import { InvoicesWrap, Button } from './CreateInvoices.style';

const CreateInvoices = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log('save');
  };

  return (
    <InvoicesWrap>
      <AppBar>Create Invoice</AppBar>

      <SectionWrap>
        sd
        <Button onClick={handleSubmit}>Save</Button>
      </SectionWrap>
    </InvoicesWrap>
  );
};

export default CreateInvoices;
