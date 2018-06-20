import React, { Component } from 'react';
import './CalculatorScreen.css';

class CalculatorScreen extends Component {
  render() {
    return (
        <div className="CalculatorScreenContainer">
            <p className="CalculatorResult"> {this.props.result} </p>
        </div>
    );
  }
}

export default CalculatorScreen;
