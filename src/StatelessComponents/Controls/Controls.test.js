import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls'
import { shallow } from 'enzyme';

describe('Controls', () => {
  it('should exist', () => {
    let wrapper = shallow(<Controls />)
    expect(wrapper).toBeDefined()
  })
})