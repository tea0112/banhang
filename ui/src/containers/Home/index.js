import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from './Category';
import Login from './Login';
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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/:tenDanhMuc" exact>
          <Category />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
