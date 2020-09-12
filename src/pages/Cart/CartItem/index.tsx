import React from 'react';
import Card from 'shared_components/Card';
import { ProductPayload } from 'services/api/products/model';
import QuantityControl from './QuantityControls';
import styles from './CartItem.module.css';


type CartItemProps = {
  product: ProductPayload;
};


const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <div className={styles.cart_item_wrapper}>
      <Card>
        <div className={styles.cart_item_container}>
          <div className={styles.preview_image_wrapper}>
            <img
              className={styles.preview_image}
              src={`${product.previewURL}/?text=${product.name}`}
              alt="preview"
            />
          </div>
          <div className={styles.text_info_quantity_controls_container}>
            <p className={styles.description}>
              {product.description}
            </p>
            <QuantityControl
              onIncrement={e => alert("+")}
              onDecrement={e => alert("-")}
              value={1}
            />
          </div>
        </div>
      </Card>
    </div>
  )
};

export default CartItem;