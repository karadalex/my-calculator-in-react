import React, { Component } from 'react';
import './Calculator.css';
import CalculatorScreen from '../calculator-screen/CalculatorScreen';
import CalculatorButtons from '../calculator-buttons/CalculatorButtons';
import Grid from '@material-ui/core/Grid';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fsmState: 1,
      a: 0,
      b: 0,
      operator: "",
      result: 0
    }
  }

  handleButtonClick(x) {
    switch (this.state.fsmState) {
      case 1:
        if (Number.isInteger(x)) {
          this.taskFSMState2(x);
        } else if (x !== "=") {
            this.taskFSMState3(x);
        } else {
          this.taskFSMState4();
        }
        break;
      case 2:
        if (Number.isInteger(x)) {
          this.taskFSMState2(x);
        } else if (x !== "=") {
            this.taskFSMState3(x);
        } else {
          this.taskFSMState4();
        }
        break;
      case 3:
        if (Number.isInteger(x)) {
          this.taskFSMState2(x);
        } else if (x !== "=") {
            this.taskFSMState3(x);
        } else {
          this.taskFSMState4();
        }
        break;
      case 4:
        if (Number.isInteger(x)) {
          this.taskFSMState1(x);
        } else if (x !== "=") {
            this.taskFSMState3(x);
        } else {
          this.taskFSMState4();
        }
        break;
    }
  }

  taskFSMState1(firstNum) {
    this.setState({
      a: 0,
      b: firstNum,
      result: firstNum,
      fsmState: 1
    });
  }

  taskFSMState2(num) {
    var B = this.state.b.toString();
    if (B == "0") {
      B = num;
    } else {
      B = eval(B.toString()+num.toString());
    }
    this.setState({
      b: B,
      result: B,
      fsmState: 2
    });
  }

  taskFSMState3(op) {
    var B = this.state.b;
    this.setState({
      a: B,
      b: 0,
      operator: op,
      fsmState: 3
    });
  }

  taskFSMState4() {
    var res = this.calculate();
    this.setState({
      a: 0,
      b: res,
      result: res,
      fsmState: 4
    });
  }

  calculate() {
    var op = this.state.operator;
    var prev = this.state.a;
    var num = this.state.b;
    var res;
    switch (op) {
      case "+":
        res = prev + num;
        break;
      case "-":
        res = prev - num;
        break;
      case "x":
        res = prev * num;
        break;
      case "/":
        if (num !== 0) {
          res = prev / num;
        }
        break;
    }
    return res;
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
