import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './containers/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
