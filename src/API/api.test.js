import React from 'react';
import { shallow, mount} from 'enzyme';
import {fetchPeopleData, fetchHomeWorld, fetchSpecies, fetchVehicleData, fetchPlanetData, fetchResidents } from './api'
import * as mockData from '../mockData'

describe('API', () => {

  describe('fetchPeopleData', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData.mockPeopleData)
      }))
    })

    it('calls fetch with the correct data', async () => {
      let url = 'https://swapi.co/api/people/'

      await fetchPeopleData();

      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('returns the correct data', () => {

    })
  })

  describe('fetchHomeworld', () => {

    it('calls fetch with the correct data', async () => {
      let url = "https://swapi.co/api/planets/1/"

      await fetchHomeWorld(url);

      expect(window.fetch).toHaveBeenCalledWith(url)
    })
  })

  describe('fetchSpecies', () => {

    it('calls fetch with the correct data', async () => {
      let url = 'url.com'

      await fetchSpecies(url);

      expect(window.fetch).toHaveBeenCalledWith(url)
    })
  })

  describe('fetchVehicleData', () => {

    it('calls fetch with the correct data', async () => {
      let url = 'url.com'

      await fetchVehicleData(url);

      expect(window.fetch).toHaveBeenCalledWith(url)
    })
  })

  describe('fetchPlanetData', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData.mockPlanetData)
      }))
    })

    it('calls fetch with the correct data', async () => {
      let url = 'url.com'

      await fetchPlanetData();

      expect(window.fetch).toHaveBeenCalled()
    })
  })

  describe('fetchResidents', () => {


    it('calls fetch with the correct data', async () => {
      let mockResidents = [
        'url',
        'url'
      ]

      await fetchResidents(mockResidents);

      expect(window.fetch).toHaveBeenCalled()
    })
  })
})