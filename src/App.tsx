import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from 'styles/theme';
import store from 'store';

import Home from 'pages/Home';
import Cart from 'pages/Cart';
import HouseAndHome from 'pages/HouseAndHome';
import Women from 'pages/Women';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />

      <StoreProvider store={store}>
        <BrowserRouter basename="/shop">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/house_and_home">
              <HouseAndHome />
            </Route>
            <Route exact path="/women">
              <Women />
            </Route>
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
