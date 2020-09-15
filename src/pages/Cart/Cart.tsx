import React from 'react';
import { ProductPayload } from 'services/api/products/model';
import Layout from 'shared_components/Layout';
import CartItem from './CartItem';

import styles from './Cart.module.css';
import commonStyles from 'styles/common.module.css';
import OrderForm from './OrderForm';


type CartProps = { itemsComponents: JSX.Element[]; }

type CartContainerProps = {
  items: ProductPayload[];
  addItem: (product: ProductPayload) => void;
  removeItem: (product: ProductPayload) => void;
};


const Cart: React.FC<CartProps> = ({ itemsComponents }) => (
  <Layout>
    <div className={commonStyles.container}>
      <div className={styles.flex_container}>
        <div className={styles.items_container}>
          {itemsComponents}
        </div>
        
        <OrderForm onSubmit={(values) => {
          console.log(values);
        }} />
      </div>
    </div>
  </Layout>
);

const CartContainer: React.FC<CartContainerProps> = ({ items, addItem, removeItem }) => {
  const itemsAndQuantities = {}; //TODO use Map here
  const itemsComponents: JSX.Element[] = [];

  items.forEach(item => {
    if (itemsAndQuantities[item.id] === undefined) {
      itemsAndQuantities[item.id] = {
        item,
        quantity: 1,
      };
    } else {
      itemsAndQuantities[item.id].quantity += 1;
    }
  });

  for (let itemId in itemsAndQuantities) {
    const { item, quantity } = itemsAndQuantities[itemId];

    itemsComponents.push(
      <div key={item.id} className={styles.cart_item_container}>
        <CartItem
          item={item}
          increment={addItem}
          decrement={removeItem}
          quantity={quantity}
        />
      </div>
    );
  };

  return (
    <Cart itemsComponents={itemsComponents} />
  );
}

export default CartContainer;