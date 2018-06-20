import React, { Component } from 'react';
import './CalculatorScreen.css';
import Paper from '@material-ui/core/Paper';

class CalculatorScreen extends Component {
  render() {
    return (
        <Paper className="CalculatorScreenContainer" elevation={4}>
            <p className="CalculatorResult"> {this.props.result} </p>
        </Paper>
    );
  }
}

export default CalculatorScreen;
