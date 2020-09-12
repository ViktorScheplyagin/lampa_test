import React from 'react';
import Layout from 'shared_components/Layout';
import ProductItem from 'pages/Home/ProductItem';
import { ProductPayload } from 'services/api/products/model';
import { getProducts } from 'services/api/products';

import styles from './Home.module.css';

const Home: React.FC = () => {
  const products: ProductPayload[] = getProducts();

  const mapProductsToComponents = (products: ProductPayload[]) => (
    products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))
  );

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.grid_layout}>
          {mapProductsToComponents(products)}
        </div>
      </div>
    </Layout>
  );
};

export default Home;