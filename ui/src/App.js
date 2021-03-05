import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './containers/Header';
import HeaderAdmin from './containers/Admin/HeaderAdmin';
import Admin from './containers/Admin';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/admin">
          <HeaderAdmin />
          <Admin />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
