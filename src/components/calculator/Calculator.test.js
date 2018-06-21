import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Calculator from './Calculator';
import CalculatorScreen from '../calculator-screen/CalculatorScreen';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('Calculator component testing', function() {
  it('renders CalculatorScreen component', function() {
    const wrapper = shallow(<Calculator />); 
    const app = <CalculatorScreen />;
    expect(wrapper.contains(app)).to.equal(true);
  });
});