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
      result: 0
    }
  }

  handleButtonClick(i) {
    this.setState({result: i});
  }

  render() {
    return (
        <div className="CalculatorBody">
            <Grid container>
              <Grid item xs={12}>
                <CalculatorScreen result={this.state.result}/>
              </Grid>
              <Grid item xs={12}>
                <CalculatorButtons onClick={(i) => this.handleButtonClick(i)}/>
              </Grid>
            </Grid>
        </div>
    );
  }
}

export default Calculator;
