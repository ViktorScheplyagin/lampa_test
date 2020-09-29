import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import store from 'store';

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
    <ThemeProvider>
      <CSSReset />

      <StoreProvider store={store}>
        <BrowserRouter basename="/lampa_test/">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
