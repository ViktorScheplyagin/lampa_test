import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'shared_components/Button';
import Card from 'shared_components/Card';

import styles from './OrderForm.module.css';

const OrderForm: React.FC<any> = (props) => {
  return (
    <div className={styles.order_form_card_wrapper}>
      <Card>
        <form 
          onSubmit={props.handleSubmit}
          className={styles.order_form}
        >
          <Field
            className={styles.order_form_field}
            component="input"
            name="name"
            type="text"
            placeholder="name"
          />
          <Field
            className={styles.order_form_field}
            component="input"
            name="surname"
            type="text"
            placeholder="surname"
          />
          <Field
            className={styles.order_form_field}
            component="input"
            name="address"
            type="text"
            placeholder="address"
          />
          <Field
            className={styles.order_form_field}
            component="input"
            name="phone"
            type="text"
            placeholder="phone"
          />
          <Button style={{
            width: "100%",
            fontSize: "1.3em",
            fontWeight: "bolder",
            marginTop: "1em",
          }}>
            Order
          </Button>
        </form>
      </Card>
    </div>
  );
};

const OrderFormContainer = reduxForm({ form: "order" })(OrderForm);

export default OrderFormContainer;