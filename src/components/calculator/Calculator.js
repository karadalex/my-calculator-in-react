import React, { Component } from 'react';
import './Calculator.css';
import CalculatorScreen from '../calculator-screen/CalculatorScreen';
import CalculatorButtons from '../calculator-buttons/CalculatorButtons';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: 0,
      result: 0
    }
  }

  handleButtonClick(i) {
    this.setState({result: i});
  }

  render() {
    return (
        <div className="CalculatorBody">
            <CalculatorScreen result={this.state.result}/>
            <CalculatorButtons onClick={(i) => this.handleButtonClick(i)}/>
        </div>
    );
  }
}

export default Calculator;
