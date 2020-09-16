import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import 'styles/css_reset.css';

import Home from 'pages/Home';
import Cart from 'pages/Cart';
import mockData from 'services/mockData';

const App: React.FC = () => {
  useEffect(() => {
    const allMockProductsJSON = localStorage.getItem('all');
    const cartMockProductsJSON = localStorage.getItem('cart');

    if (!allMockProductsJSON) localStorage.setItem('all', mockData);
    if (!cartMockProductsJSON) localStorage.setItem('cart', JSON.stringify([]));
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
