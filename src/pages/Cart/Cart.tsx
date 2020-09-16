import React, { useEffect } from 'react';
import { ProductPayload, OrderPayload } from 'store/entities/model';
import Layout from 'shared_components/Layout';
import CartItem from './components/CartItem';
import OrderForm from './components/OrderForm';

import styles from './Cart.module.css';
import commonStyles from 'styles/common.module.css';
import { FormSubmitHandler } from 'redux-form';
import spinner from 'assets/spinner.svg';
import { calcTotalPrice, getItemsQuantities, onOrderSubmitDecorator } from './helpers';

type CartProps = {
  itemsComponents: JSX.Element[];
  isProductsFetching: boolean;
  totalPrice: number;
  onOrderSubmit: FormSubmitHandler;
};

type CartContainerProps = {
  productsLength: number;
  items: ProductPayload[];
  fetchProducts: () => void;
  fetchCartItems: () => void;
  addItem: (product: ProductPayload) => void;
  removeItem: (product: ProductPayload) => void;
  submitOrder: (order: OrderPayload) => void;

  isProductsFetching: boolean;
  isProductAdding: boolean;
  isProductRemoving: boolean;
};

const Cart: React.FC<CartProps> = ({
  itemsComponents,
  isProductsFetching,
  onOrderSubmit,
  totalPrice,
}) => (
  <Layout>
    <div className={commonStyles.container}>
      <div className={styles.flex_container}>
        <div className={styles.items_container}>
          {isProductsFetching ? (
            <div>
              <img src={spinner} alt="spinner" />
            </div>
          ) : (
            itemsComponents
          )}
        </div>

        <OrderForm onSubmit={onOrderSubmit} />
      </div>
      {totalPrice && <div className={styles.cart_total_price}>Total: {`$${totalPrice}`}</div>}
    </div>
  </Layout>
);

const CartContainer: React.FC<CartContainerProps> = ({
  productsLength,
  items,
  isProductsFetching,
  isProductAdding,
  isProductRemoving,
  fetchProducts,
  fetchCartItems,
  addItem,
  removeItem,
  submitOrder,
}) => {
  const itemsAndQuantities = getItemsQuantities(items);

  useEffect(() => {
    if (productsLength === 0) {
      fetchProducts();
    }
    if (items.length === 0) {
      fetchCartItems();
    }
    //eslint-disable-next-line
  }, []);

  const mapItemsToComponents = () => {
    const itemsComponents: JSX.Element[] = [];

    for (let itemId in itemsAndQuantities) {
      const { item, quantity } = itemsAndQuantities[itemId];

      itemsComponents.push(
        <div key={item.id} className={styles.cart_item_container}>
          <CartItem
            item={item}
            increment={addItem}
            decrement={removeItem}
            quantity={quantity}
            isDisabled={isProductAdding || isProductRemoving || isProductsFetching}
          />
        </div>,
      );
    }

    return itemsComponents;
  };

  return (
    <Cart
      itemsComponents={mapItemsToComponents()}
      onOrderSubmit={onOrderSubmitDecorator(itemsAndQuantities, submitOrder)}
      isProductsFetching={isProductsFetching}
      totalPrice={calcTotalPrice(items)}
    />
  );
};

export default CartContainer;
