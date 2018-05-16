import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      people: [ {name: 'Seamus', type: 'people'}, {name: 'Cody', type: 'people'}],
      vehicles: [{ name: 'Mercedes', type: 'vehicles' }, { name: 'Geo', type: 'vehicles'}],
      planets: [{ name: 'urANUS', type: 'planets'}, { name: 'Saturn', type: 'planets' }],
      favorites: [{ name: 'urANUS', type: 'favorites'}],
      addToFavorites: jest.fn(),
      display: ''
    }
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})