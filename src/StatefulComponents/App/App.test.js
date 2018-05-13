import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true })
  })

  it('should have an initial state that is in an object', () => {
    let expectedState = {
      openingCrawl: null,
      isLoading: true,
      favorites: 0,
      people: [],
      favorites: [],
      vehicles: [],
      planets: [],
      display: null,
    }

    expect(wrapper.state()).toEqual(expectedState)
  })
  
  describe('addToFavorites', () => {

  })

  describe('displayFavorites,', () => {

  })

  describe('setPeopleData', () => {

  })

  describe('setVehicleData', () => {

  })

  describe('setPlanetData', () => {

  })
})

