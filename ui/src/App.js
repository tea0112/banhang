import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
import Home from './containers/Home';
import Header from './containers/Header';
import HeaderAdmin from './containers/Admin/Header';
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
