import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from '../header/Header';
import Calculator from '../calculator/Calculator';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />); 
    const app = (
      <div className="App">
        <Header />
        <Calculator />
      </div>
    );
    expect(wrapper.contains(app)).to.equal(true);
  });
});