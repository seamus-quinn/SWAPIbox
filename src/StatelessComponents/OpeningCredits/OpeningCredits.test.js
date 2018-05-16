import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import OpeningCredits from './OpeningCredits';

describe('OpeningCredits', () => {

  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      openingText: 'Star Trek is the greatest',
      title: 'Star Trek: The Chamber of Secrets',
      releaseDate: '07-07-1777'
    }
    wrapper = shallow(<OpeningCredits {...mockProps} />)
  })
  
  it('should match the snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  })
})