import React from 'react';
import Card from 'shared_components/Card';
import { ProductPayload } from 'store/entities/model';

import styles from './ProductItem.module.css';

type ProductItemProps = {
  product: ProductPayload;
  isDisabled: boolean;
  onAddToCart: (product: ProductPayload) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart, isDisabled }) => {
  const addProductToCartHandler = () => onAddToCart(product);

  return (
    <div className={styles.product_item_wrapper}>
      <Card>
        <img
          className={styles.preview_image}
          src={`${product.previewURL}/?text=${product.name}`}
          alt="item preview"
        />
        <div className={styles.text_info}>
          <p className={styles.description}>{product.description}</p>
          <button
            className={styles.add_to_cart_btn}
            disabled={isDisabled}
            onClick={addProductToCartHandler}
          >
            <span>Add to cart</span>
            <span>{`$${product.price}`}</span>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
