import React from 'react';
import logo from './img/9arch-logo.svg';
import menu from './img/Icon-Menu.svg'
import heroImg from './img/enneagram-black.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        </Switch>
        <footer>©2020 Karl Li. All Rights Reserved.</footer>
      </Router>
    </React.Fragment>
  );
}

function Home() {
  return (
    <React.Fragment>
      <section className="hero">
          <img className="heroImg" src={heroImg} width="180" height="180"/>
          <h2>What is the Enneagram?</h2>
          <p>The Enneagram is a 9-sided figure that represents 9 different personas. It is a profound tool for self-discovery and illuminating your true self.</p>
          <Link to="/test-instructions">
            <button>
                Take the test
            </button>
          </Link>
        </section>
        <ArchetypeCards />
    </React.Fragment>
  )
}

function ArchetypeCards() {
  return(
    <div className="cards">
      <h1>The 9 Archetypes</h1>
    </div>
  )
}

function TestInstructions() {
  return (
    <React.Fragment>
      <h1 className="test-instruction-header">Enneagram Test Instructions</h1>
      <section className="instructions">
        <div>
          <ol>
            <li><p>In the next couple of screens, you will be presented with a series of statements.</p></li>
            <li><p>Take no more than 15 seconds to evaluate each statement and see if it applies to you:</p></li>
            <p>“Yes” = “This statement really describes me!”</p>
            <p>“Partly” = “This statement partly describes me.”</p>
            <p>“No” = “This statement doesn’t describe me.”</p>
            <li><p>For best results, mark your answers as honestly as possible. If you are feeling unsure if a statement applies to you, it's generally safer to mark it as "No".</p></li>
          </ol>
        </div>
        <Link to="/test">
          <button>
              Begin
          </button>
        </Link>
      </section>
    </React.Fragment>
  )
}

function Test() {
  return (
    <React.Fragment>
      <h1 className="test-header">Enneagram Test</h1>
    </React.Fragment>
  )
}

export default App;
