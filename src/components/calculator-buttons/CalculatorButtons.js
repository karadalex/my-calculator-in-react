import React, { Component } from 'react';
import './CalculatorButtons.css';
import CalculatorButton from '../button/CalculatorButton';
import Grid from '@material-ui/core/Grid';

const nums = [1,2,3,4,5,6,7,8,9,0];
const operators = ["+", "-", "x", "/"];
class CalculatorButtons extends Component {
  renderButton(i, size) {
    return (
      <Grid item xs={size}>
        <CalculatorButton 
          key={i}
          symbol={i} 
          onClick={() => this.props.onClick(i)}
        />
      </Grid>
    );
  }

  render() {
    return (
        <div className="CalculatorButtonsContainer">
          <Grid container justify="space-between">
            <Grid container xs={8} spacing={24}>
              {
                nums.map(i => {
                  return this.renderButton(i, 4);
                })
              }
            </Grid>
            <Grid container xs={3}>
              {
                operators.map(i => {
                  return this.renderButton(i, 12);
                })
              }
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default CalculatorButtons;
