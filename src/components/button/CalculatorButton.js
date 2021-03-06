import React, { Component } from 'react';
import './CalculatorButton.css';

class CalculatorButton extends Component {
  render() {
    return (
        <button className="CalculatorButton" onClick={() => this.props.onClick()}>
          {this.props.symbol}
        </button>
    );
  }
}

export default CalculatorButton;
