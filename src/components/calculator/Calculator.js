import React, { Component } from 'react';
import './Calculator.css';
import CalculatorScreen from '../calculator-screen/CalculatorScreen';
import CalculatorButtons from '../calculator-buttons/CalculatorButtons';

class Calculator extends Component {
  render() {
    return (
        <div className="CalculatorBody">
            <CalculatorScreen />
            <CalculatorButtons onClick={() => alert('click')}/>
        </div>
    );
  }
}

export default Calculator;
