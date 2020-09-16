import React, { useEffect } from 'react';
import Layout from 'shared_components/Layout';
import ProductItem from 'pages/Home/components/ProductItem';
import { ProductPayload } from 'store/entities/model';

import styles from './Home.module.css';
import commonStyles from 'styles/common.module.css';
import spinner from 'assets/spinner.svg';

type HomeProps = {
  products: ProductPayload[];
  isProductsFetching: boolean;
  isProductAddingToCart: boolean;
  addToCart: (product: ProductPayload) => void;
};

type HomeContainerProps = HomeProps & {
  cartItemsLength: number;
  fetchProducts: () => void;
  fetchCartItems: () => void;
};

const Home: React.FC<HomeProps> = ({
  products,
  addToCart,
  isProductsFetching,
  isProductAddingToCart,
}) => (
  <Layout>
    <div className={commonStyles.container}>
      {isProductsFetching ? (
        <div className={styles.spinner_wrapper}>
          <img src={spinner} alt="spinner" />
        </div>
      ) : (
        <div className={styles.grid_layout}>
          {products?.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              isDisabled={isProductAddingToCart}
            />
          ))}
        </div>
      )}
    </div>
  </Layout>
);

const HomeContainer: React.FC<HomeContainerProps> = ({
  fetchProducts,
  fetchCartItems,
  cartItemsLength,
  ...homeProps
}) => {
  useEffect(() => {
    if (homeProps.products.length === 0) {
      fetchProducts();
    }
    if (cartItemsLength === 0) {
      fetchCartItems();
    }
    //eslint-disable-next-line
  }, []);

  return <Home {...homeProps} />;
};

export default HomeContainer;
