import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import { PeopleCard, VehicleCard, PlanetCard } from './Cards';

describe('Cards', () => {

  describe('PeopleCard', () => {
    let wrapper;
    let mockProps;

    beforeEach(() => {
      mockProps = {
        person: {
          name: 'Jerry',
          homeworld: 'Mordor',
          species: 'orc',
          homoworldPop: 2
        },
        addToFavorites: jest.fn(),
        display: 'people'
      }
      wrapper = mount(<PeopleCard {...mockProps} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call addToFavorites with the correct parameters, when button is clicked', () => {
      wrapper.find('button').simulate('click');

      expect(wrapper.prop(addToFavorites)).toHaveBeenCalledWith('Jerry', 'people')
    })
  })

  describe('VehicleCard', () => {
    let wrapper;
    let mockProps;

    beforeEach(() => {
      mockProps = {
        person: {
          name: 'Razor Scooter',
          model: 'S-Class',
          class: 'coupe',
          passsengers: 2
        },
        addToFavorites: jest.fn(),
        display: 'vehicles'
      }
      wrapper = mount(<VehicleCard {...mockProps} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call addToFavorites with the correct parameters, when button is clicked', () => {

      console.log(wrapper)
      wrapper.find('button').simulate('click');

      expect(wrapper.prop(addToFavorites)).toHaveBeenCalledWith('Razor Scooter', 'vehicles')
    })
  })

  describe('PlanetCard', () => {
    let wrapper;
    let mockProps;

    beforeEach(() => {
      mockProps = {
        person: {
          name: 'Earth',
          terrain: 'fluffy',
          population: 60,
          Climate: 'sometimes too hot',
          Residents: ['Donald Glover', 'Donald Duck', 'Donald Trump']
        },
        addToFavorites: jest.fn(),
        display: 'planets'
      }
      wrapper = mount(<PeopleCard {...mockProps} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call addToFavorites with the correct parameters, when button is clicked', () => {
      wrapper.find('button').simulate('click');

      expect(wrapper.prop(addToFavorites)).toHaveBeenCalledWith('Earth', 'planets')
    })
  })
})