import React from 'react';
import heroImg from './img/enneagram-black.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  export default Home;