import React, { useEffect } from 'react';
import Home from './Home';
import { HomeContainerProps } from './types';

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