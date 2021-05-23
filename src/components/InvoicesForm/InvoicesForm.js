import { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { createInvoice, editInvoice } from 'services/invoices-api';
import { getFormatDate } from 'functions/getFormatDate';
import {
  FormWrap,
  Input,
  Label,
  Button,
  InputWrap,
  Textarea,
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

  const handleSubmit = event => {
    event.preventDefault();

    const INV = {
      number: number,
      date_created: invoiceDate,
      date_supplied: supplyDate,
      comment: comment,
    };

    if (invoice) {
      editInvoice(invoice.id, INV);
    } else {
      createInvoice(INV);
    }

    onGoMainPage();
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
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
      <Button type="submit">Save</Button>
    </FormWrap>
  );
};

InvoicesForm.defaultProps = {
  invoice: null,
};

InvoicesForm.propTypes = {
  invoice: PropTypes.object,
};

export default InvoicesForm;
