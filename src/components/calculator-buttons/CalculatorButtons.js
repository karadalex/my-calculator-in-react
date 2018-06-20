import React, { Component } from 'react';
import './CalculatorButtons.css';
import CalculatorButton from '../button/CalculatorButton';
import Grid from '@material-ui/core/Grid';

const nums = [1,2,3,4,5,6,7,8,9,0];
class CalculatorButtons extends Component {
  renderButton(i) {
    return (
      <Grid item xs={4}>
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
          <Grid container spacing={24}>
            {
              nums.map(i => {
                return this.renderButton(i);
              })
            }
          </Grid>
        </div>
    );
  }
}

export default CalculatorButtons;
