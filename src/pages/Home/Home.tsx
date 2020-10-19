import React from 'react';
import Layout from 'shared_components/Layout';

import { HomeProps } from './types';
import Board from './components/Board';


const Home: React.FC<HomeProps> = () => (
  <Layout>
    <Board
      height="85vh"
      cover="https://fakeimg.pl/1000"
    />
    some goods
  </Layout>
);

export default Home;
