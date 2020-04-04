import React from 'react';
import logo from './img/9arch-logo.svg';
import menu from './img/Icon-Menu.svg'
import heroImg from './img/enneagram-black.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="nav">
        <img src={logo} width="32"/>
        <h1>9 Archetypes</h1>
        <img className="icon-menu" src={menu} width="32" height="32"/>
      </div>
      <section className="hero">
        <img className="heroImg" src={heroImg} width="180" height="180"/>
        <h2>What is the Enneagram?</h2>
        <p>The Enneagram is a 9-sided figure that represents 9 different personas. It is a profound tool for self-discovery and illuminating your true self.</p>
        <button>Take the test</button>
        </section>
        <h2>The 9 Archetypes</h2>
      <footer>©2020 Karl Li. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
