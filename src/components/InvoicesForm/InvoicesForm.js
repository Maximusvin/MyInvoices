import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useLocation, useHistory } from 'react-router';
import { createInvoice } from 'services/invoices-api';
import {
  FormWrap,
  Input,
  Label,
  Button,
  InputWrap,
  Textarea,
} from './InvoicesForm.style';

const validationSchema = yup.object().shape({
  inv: yup
    .number()
    .required()
    .test(
      3,
      'Minimum 3 and maximum 10 characters',
      val => val && val.toString().length >= 3 && val.toString().length <= 10,
    )
    .integer()
    .positive(),
  invoiceDate: yup.string().required('Required'),
  supplyDate: yup.string().required('Required'),
  comment: yup
    .string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(160, 'Maximum 160 characters'),
});

function CustomInput({ field, placeholder, type }) {
  return (
    <>
      <Input {...field} type={type} placeholder={placeholder} />
      <ErrorMessage name={field.name} component="span" />
    </>
  );
}

function CustomTextarea({ field, placeholder }) {
  return (
    <>
      <Textarea {...field} placeholder={placeholder} />
      <ErrorMessage name={field.name} component="span" />
    </>
  );
}

const InvoicesForm = () => {
  const location = useLocation();
  const history = useHistory();

  const onGoMainPage = () => {
    history.push((location.pathname = '/'));
  };

  const handleSubmit = ({ inv, invoiceDate, supplyDate, comment }) => {
    const INV = {
      number: inv,
      date_created: invoiceDate,
      date_supplied: supplyDate,
      comment,
    };

    createInvoice(INV);
    onGoMainPage();
  };

  return (
    <Formik
      initialValues={{
        inv: '',
        invoiceDate: '',
        supplyDate: '',
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);

        actions.setSubmitting(false);
        actions.resetForm({});
      }}
    >
      <Form>
        <FormWrap>
          <InputWrap>
            <Label>
              Number:
              <Field
                name="inv"
                type="number"
                placeholder="Enter the number"
                component={CustomInput}
              />
            </Label>

            <Label>
              Invoice Date:
              <Field
                name="invoiceDate"
                type="date"
                placeholder="Select date"
                component={CustomInput}
              />
            </Label>

            <Label>
              Supply Date:
              <Field
                name="supplyDate"
                type="date"
                placeholder="Select date"
                component={CustomInput}
              />
            </Label>
          </InputWrap>
          <Label>
            Comment:
            <Field name="comment" component={CustomTextarea} />
          </Label>
        </FormWrap>

        <Button type="submit">Save</Button>
      </Form>
    </Formik>
  );
};

export default InvoicesForm;
