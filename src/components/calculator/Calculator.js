import React, { Component } from 'react';
import './Calculator.css';
import CalculatorScreen from '../calculator-screen/CalculatorScreen';
import CalculatorButtons from '../calculator-buttons/CalculatorButtons';
import Grid from '@material-ui/core/Grid';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: 0,
      result: 0,
      latestOperator: ""
    }
  }

  handleButtonClick(x) {
    if (Number.isInteger(x)) {
      var newResult = this.calculate(x)
      this.setState({result: newResult});
    } else {
        this.setState({latestOperator: x});
    }
  }

  calculate(num) {
    var op = this.state.latestOperator;
    var prev = this.state.result;
    switch (op) {
      case "+":
        return prev + num;
      case "-":
        return prev - num;
      case "x":
        return prev * num;
      case "/":
        if (num != 0) {
          return prev / num;
        } else {
          return NaN;
        }
    }
  }

  render() {
    return (
        <div className="CalculatorBody">
            <Grid container>
              <Grid item xs={12}>
                <CalculatorScreen result={this.state.result}/>
              </Grid>
              <Grid item xs={12}>
                <CalculatorButtons onClick={(x) => this.handleButtonClick(x)}/>
              </Grid>
            </Grid>
        </div>
    );
  }
}

export default Calculator;
