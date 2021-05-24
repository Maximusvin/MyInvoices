import { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { createInvoice, editInvoice } from 'services/invoices-api';
import { getFormatDate } from 'functions/getFormatDate';
import {
  Form,
  Input,
  Label,
  Button,
  InputWrap,
  Textarea,
  ButtonWrap,
  MainFormWrap,
} from './InvoicesForm.style';

const InputFieldName = {
  INV: 'inv',
  INV_DATE: 'invoiceDate',
  SUPPLY_DATE: 'supplyDate',
  COMMENT: 'comment',
};

const InvoicesForm = ({ invoice }) => {
  const location = useLocation();
  const history = useHistory();

  const [number, setNumber] = useState(invoice ? invoice.number : '');
  const [invoiceDate, setInvoiceDate] = useState(
    invoice ? getFormatDate(invoice.date_created) : '',
  );
  const [supplyDate, setSupplyDate] = useState(
    invoice ? getFormatDate(invoice.date_supplied) : '',
  );
  const [comment, setComment] = useState(invoice ? invoice.comment : '');

  const onGoMainPage = () => {
    history.push((location.pathname = '/'));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (true) {
      case name === InputFieldName.INV:
        setNumber(value);
        break;
      case name === InputFieldName.INV_DATE:
        setInvoiceDate(value);
        break;
      case name === InputFieldName.SUPPLY_DATE:
        setSupplyDate(value);
        break;
      case name === InputFieldName.COMMENT:
        setComment(value);
        break;
      default:
        return;
    }
  };

  const INV = {
    number: number,
    date_created: invoiceDate,
    date_supplied: supplyDate,
    comment: comment,
  };

  const isValidationData = () => {
    const isNumberValid = number.toString().split('').length >= 3;
    const isCommentValid = comment.length > 3 && comment.length <= 160;
    return isNumberValid && invoiceDate && supplyDate && isCommentValid
      ? true
      : false;
  };

  const showMessage = isValidationData()
    ? ''
    : 'All fields must be filled. The field "Number" must be at least 3 digits. The "Comment" field contains a minimum of 4 and a maximum of 160 characters.';

  const handleSubmit = event => {
    event.preventDefault();

    if (isValidationData()) {
      if (invoice) {
        editInvoice(invoice.id, INV);
      } else {
        createInvoice(INV);
      }

      onGoMainPage();
    } else return;
  };

  return (
    <MainFormWrap>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <Label>
            Number:
            <Input
              name={InputFieldName.INV}
              type="number"
              value={number}
              onChange={handleInputChange}
              placeholder="Enter the number"
            />
          </Label>

          <Label>
            Invoice Date:
            <Input
              name={InputFieldName.INV_DATE}
              type="date"
              value={invoiceDate}
              placeholder="Select date"
              onChange={handleInputChange}
            />
          </Label>

          <Label>
            Supply Date:
            <Input
              name={InputFieldName.SUPPLY_DATE}
              type="date"
              value={supplyDate}
              placeholder="Select date"
              onChange={handleInputChange}
            />
          </Label>
        </InputWrap>
        <Label>
          Comment:
          <Textarea
            name={InputFieldName.COMMENT}
            value={comment}
            onChange={handleInputChange}
          />
        </Label>

        <ButtonWrap>
          <p>{showMessage}</p>

          <Button type="submit" disabled={!isValidationData()}>
            Save
          </Button>
        </ButtonWrap>
      </Form>
    </MainFormWrap>
  );
};

InvoicesForm.defaultProps = {
  invoice: null,
};

InvoicesForm.propTypes = {
  invoice: PropTypes.object,
};

export default InvoicesForm;
