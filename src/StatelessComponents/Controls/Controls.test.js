import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls'
import { shallow } from 'enzyme';

describe('Controls', () => {

  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      favorites: [ {name: 'Ron', homePlanet: 'Great Briatin' } ],
      setPeopleData: jest.fn(),
      setVehicleData: jest.fn(),
      setPlanetData: jest.fn(),
      displayFavorites: jest.fn()
    }
    wrapper = shallow(<Controls />)
  })

  it('should exist match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })
})