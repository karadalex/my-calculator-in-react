import React, { Component } from 'react';
import './CalculatorButtons.css';
import CalculatorButton from '../button/CalculatorButton';

const nums = [1,2,3,4,5,6,7,8,9,0];
class CalculatorButtons extends Component {
  render() {
    return (
        <div className="CalculatorButtonsContainer">
          {
            nums.map(i => {
              return <CalculatorButton symbol={i} />
            })
          }
        </div>
    );
  }
}

export default CalculatorButtons;
