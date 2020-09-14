import React, { useEffect } from 'react';
import Layout from 'shared_components/Layout';
import ProductItem from 'pages/Home/ProductItem';
import { ProductPayload } from 'services/api/products/model';

import styles from './Home.module.css';
import commonStyles from 'styles/common.module.css';


type HomeProps = {
  products: ProductPayload[];
  addToCart: (product: ProductPayload) => void;
};

type HomeContainerProps = HomeProps & {
  fetchProducts: () => void;
};


const Home: React.FC<HomeProps> = ({ products, addToCart }) => (
  <Layout>
    <div className={commonStyles.container}>
      <div className={styles.grid_layout}>
        {products?.map(product => (
          <ProductItem 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  </Layout>
);


const HomeContainer: React.FC<HomeContainerProps> = ({fetchProducts, ...homeProps}) => {
  useEffect(() => {
    fetchProducts();
    //eslint-disable-next-line
  }, []);

  return <Home {...homeProps} />;
};

export default HomeContainer;