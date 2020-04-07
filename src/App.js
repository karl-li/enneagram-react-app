import React from 'react';
import logo from './img/9arch-logo.svg';
import menu from './img/Icon-Menu.svg'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home.js';
import Test from './Test.js';
import TestInstructions from './TestInstructions.js';
import Results from './Results.js';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="nav">
          <Link to="/">
            <img src={logo} width="32"/>
            <h1>9 Archetypes</h1>
          </Link>
          <img className="icon-menu" src={menu} width="32" height="32"/>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path ="/test-instructions">
            <TestInstructions />
          </Route>
          <Route exact path ="/test">
            <Test />
          </Route>
          <Route exact path ="/test-results">
            <Results />
          </Route>
        </Switch>
        <footer>©2020 Karl Li. All Rights Reserved.</footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
