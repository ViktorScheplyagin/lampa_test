import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from 'services/validation/common';
import { lettersOnly, phoneNumber } from 'services/validation/orderForm';
import { Button } from '@chakra-ui/core';
import Card from 'shared_components/Card';

import styles from './OrderForm.module.css';

const renderField = ({
  input,
  placeholder,
  type,
  className,
  meta: { touched, error },
}) => (
  <>
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      {...input}
    />
    <div className={styles.order_form_field_error}>
      {touched && error ? <span>{error}</span> : null}
    </div>
  </>
);

const OrderForm: React.FC<any> = (props) => {
  return (
    <div className={styles.order_form_card_wrapper}>
      <Card>
        <form onSubmit={props.handleSubmit} className={styles.order_form}>
          <Field
            className={styles.order_form_field}
            label="aaa"
            component={renderField}
            name="name"
            type="text"
            placeholder="name"
            validate={[lettersOnly, required]}
          />
          <Field
            className={styles.order_form_field}
            component={renderField}
            name="surname"
            type="text"
            placeholder="surname"
            validate={[lettersOnly, required]}
          />
          <Field
            className={styles.order_form_field}
            component={renderField}
            name="address"
            type="text"
            placeholder="address"
            validate={required}
          />
          <Field
            className={styles.order_form_field}
            component={renderField}
            name="phone"
            type="text"
            placeholder="phone"
            validate={[required, phoneNumber]}
          />
          <Button>Order</Button>
        </form>
      </Card>
    </div>
  );
};

const OrderFormContainer = reduxForm({ form: 'order' })(OrderForm);

export default OrderFormContainer;
