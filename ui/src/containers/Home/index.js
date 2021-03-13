import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from './Category';
import Login from './Login';
import Register from './Register';
import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/danh-muc">
          <Category />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
