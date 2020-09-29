import React, { useEffect } from 'react';
import Layout from 'shared_components/Layout';
import ProductItem from 'pages/Home/components/ProductItem';

import styles from './Home.module.css';
import commonStyles from 'styles/common.module.css';
import spinner from 'assets/spinner.svg';
import { HomeProps, HomeContainerProps } from './types';
import Board from './components/Board';


const Home: React.FC<HomeProps> = ({
  products,
  addToCart,
  isProductsFetching,
  isProductAddingToCart,
}) => (
  <Layout>
    <Board
      height="85vh"
      cover="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
    />
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
