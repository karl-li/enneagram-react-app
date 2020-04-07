import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class Results extends Component {
    state = {
        results: "8 - The Challenger"
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="header">Enneagram Test Results</h1>
                <section className="instructions">
                    <p>You are most likely a type <strong>{this.state.results}</strong>.</p>
                    <p>Take this with a grain of salt. No personality test is completely accurate. Hence, when deciding which Enneagram type and wing you are, you also might want to consider the types with the highest test scores on the list below.</p>
                    <ul>
                        <li>9</li>
                        <li>8</li>
                        <li>7</li>
                        <li>6</li>
                        <li>5</li>
                        <li>4</li>
                        <li>3</li>
                        <li>2</li>
                        <li>1</li>
                    </ul>
                </section>
            </React.Fragment>
        )
    };
}

export default Results;