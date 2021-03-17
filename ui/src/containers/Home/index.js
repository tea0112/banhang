import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Category from './Category';
import Login from './Login';
import Product from './Product';
import Register from './Register';
import './style.scss';
import Welcome from './Welcome';

const Home = () => {
  return (
    <div className="home">
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/:tenDanhMuc" exact>
          <Category />
        </Route>
        <Route path="/:tenDanhMuc/product/:id" exact>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
