import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function TestInstructions() {
    return (
      <React.Fragment>
        <h1 className="header">Enneagram Test Instructions</h1>
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

  export default TestInstructions;