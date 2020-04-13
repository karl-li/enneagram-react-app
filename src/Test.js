import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Test extends Component {
    state = {
        type1: 0,
        type2: 0,
        type3: 0,
        type4: 0,
        type5: 0,
        type6: 0,
        type7: 0,
        type8: 0,
        type9: 0
    }

    handleFormSubmit = formSubmitEvent => {
      formSubmitEvent.preventDefault();
      console.log("You have submitted:", formSubmitEvent);
    };

    displayAlert = () => {
      alert('heres the state: ' + JSON.stringify(this.state));
    };

    handleOptionChange = changeEvent => {
      this.setState({
        type1: this.state.type1 + parseFloat(changeEvent.target.value)
      });
    };

    render() {
        return (
            <React.Fragment>
              <h1 className="header">Enneagram Test: Page 1 of 14</h1>
              <form className="enneagram-test">
                <ol>
                  <li><p>I love to take care of people and I'm good at it.</p>
                  <label>
                    <input
                    id="1"
                    type="radio"
                    name="Q1"
                    value="0"
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                    />
                    No
                  </label>
                  <label>
                    <input
                    id="1"
                    type="radio"
                    name="Q1"
                    value=".34"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    id="1"
                    type="radio"
                    name="Q1"
                    value="1"
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>I don't see much point in wallowing in negative emotions. When I begin to feel anxious, I tend to throw myself into distracting activities.</p>
                  <label>
                    <input
                    type="radio"
                    name="Q2"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q2"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q2"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>Usually I just focus on the positive sides of people, as focussing on negative traits or events does not help making relationships more harmonious.</p>
                  <label>
                    <input
                    type="radio"
                    name="Q3"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q3"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q3"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>When I really get involved in an intellectual problem that stimulates me, I tend to detach from my emotions.</p>
                  <label>
                    <input
                    type="radio"
                    name="Q4"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q4"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q4"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>My tendency to tell people what's wrong and what they should do about it has sometimes annoyed them.</p>
                  <label>
                    <input
                    type="radio"
                    name="Q5"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q5"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q5"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>When making a decision, I often ask myself "which option will yield the maximum enjoyment?".</p>
                  <label>
                    <input
                    type="radio"
                    name="Q6"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q6"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q6"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>I can easily imagine all the things that might go wrong, as I have a really vivid imagination.</p>
                  <label>
                    <input
                    type="radio"
                    name="Q7"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q7"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q7"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>I generally don't like to stay at one task for very long. I get restless and want to move onto something else.</p>
                  <label>
                    <input
                    type="radio"
                    name="Q8"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q8"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q8"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <li><p>It takes me quite a lot of time and effort to make important decisions and I frequently second guess myself.</p>
                  <label>
                    <input
                    type="radio"
                    name="Q9"
                    value="0"
                    className="form-check-input"
                    checked/>
                    No
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q9"
                    value=".34"
                    className="form-check-input"
                    />
                    Partly
                  </label>
                  <label>
                    <input
                    type="radio"
                    name="Q9"
                    value="1"
                    className="form-check-input"
                    />
                    Yes
                  </label>
                  </li>
                  <button onClick={this.displayAlert}>
                      Submit
                  </button>
                  <br/>
                  <Link to="/test-results">
                    <button>
                      Next
                    </button>
                  </Link>
                </ol>
              </form>
            </React.Fragment>
          )
    }
  }

  export default Test;