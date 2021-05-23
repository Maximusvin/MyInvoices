import { AppBar, InvoicesForm } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEditInvoice } from 'redux/editInvoice/editInvoiceOperations';
import { useDispatch } from 'react-redux';
import { SectionWrap } from 'UI/SectionWrap';
import { InvoicesWrap } from 'components/CreateInvoices/CreateInvoices.style';
import { useSelector } from 'react-redux';
import { getEditInvoice } from 'redux/editInvoice/editInvoiceSelectors';

const EditInvoice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const editInvoice = useSelector(getEditInvoice);

  useEffect(() => {
    dispatch(fetchEditInvoice(id));
  }, [dispatch, id]);

  return (
    <InvoicesWrap>
      <AppBar>Edit Invoice</AppBar>

      {editInvoice.id && (
        <SectionWrap>
          <InvoicesForm invoice={editInvoice} />
        </SectionWrap>
      )}
    </InvoicesWrap>
  );
};

export default EditInvoice;
