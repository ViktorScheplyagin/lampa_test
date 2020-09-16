import React from 'react';
import Card from 'shared_components/Card';
import { ProductPayload } from 'store/entities/model';
import QuantityControl from './QuantityControls';
import styles from './CartItem.module.css';

type CartItemProps = {
  increment: (product: ProductPayload) => void;
  decrement: (product: ProductPayload) => void;
  item: ProductPayload;
  quantity: number;
  isDisabled: boolean;
};

const CartItem: React.FC<CartItemProps> = ({
  increment,
  decrement,
  item,
  quantity,
  isDisabled,
}) => {
  const incrementQuantity = () => increment(item);
  const decrementQuantity = () => decrement(item);

  return (
    <div className={styles.cart_item_wrapper}>
      <Card>
        <div className={styles.cart_item_container}>
          <div className={styles.preview_image_wrapper}>
            <img
              className={styles.preview_image}
              src={`${item.previewURL}/?text=${item.name}`}
              alt="preview"
            />
          </div>
          <div className={styles.text_info_quantity_controls_container}>
            <p className={styles.description}>
              <span>{item.description}</span>
              <span>Price: ${item.price}</span>
            </p>
            <QuantityControl
              isDisabled={isDisabled}
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
              value={quantity}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartItem;
