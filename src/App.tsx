import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'styles/css_reset.css';

import Home from 'pages/Home';
import Cart from 'pages/Cart';


const App: React.FC = () => {
  return (
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
  )
};

export default App;