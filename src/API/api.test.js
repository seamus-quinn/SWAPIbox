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

    it('returns the correct data', async () => {

      const expected = [
        {
          name: 'Luke Skywalker',
          type: 'people',
          homeworld: undefined,
          population: undefined,
          species: undefined
        }
      ]

      await fetchPeopleData();
      
      await expect(fetchPeopleData()).resolves.toEqual(expected)
    })

    it('sets an error when the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })))

      const expected = Error('Something is not right')

      await expect(fetchPeopleData()).rejects.toEqual(expected)
    })
  })

  describe('fetchHomeworld', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData)
      }))
    })

    it('calls fetch with the correct data', async () => {
      let url = "https://swapi.co/api/planets/1/"

      await fetchHomeWorld(url);

      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('returns the correct data', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData.mockHomeworldData)
      }))

      const expected = {
        homeworld: 'Tatooine',
        population: '200000'
      }

      await fetchHomeWorld();

      await expect(fetchHomeWorld()).resolves.toEqual(expected)
    })

    it('sets an error when the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })))

      const expected = Error('Something is not right')

      await expect(fetchHomeWorld()).rejects.toEqual(expected)
    })
  })

  describe('fetchSpecies', () => {

    it('calls fetch with the correct data', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData)
      }))

      let url = 'url.com'

      await fetchSpecies(url);

      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('returns the correct data', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData.mockSpeciesData)
      }))

      const expected = 'Human'

      await fetchSpecies();

      await expect(fetchSpecies()).resolves.toEqual(expected)
    })

    it('sets an error when the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })))

      const expected = Error('Something is not right')

      await expect(fetchSpecies()).rejects.toEqual(expected)
    })

  })

  describe('fetchVehicleData', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData.mockVehiclesData)
      }))
    })

    it('calls fetch with the correct data', async () => {
      let url = 'url.com'

      await fetchVehicleData();

      expect(window.fetch).toHaveBeenCalled()
    })

    it('returns the correct data', async () => {

      const expected = [
        {
          name: 'Sand Crawler',
          model: 'Digger Crawler',
          class: 'wheeled',
          passengers: '30',
          type: 'vehicles'
        }
      ]

      await fetchVehicleData();

      await expect(fetchVehicleData()).resolves.toEqual(expected)
    })

    it('sets an error when the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })))

      const expected = Error('Something is not right')

      await expect(fetchVehicleData()).rejects.toEqual(expected)
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

    it('returns the correct data', async () => {

      const expected = [
        {
          name: 'Alderaan',
          terrain: 'grasslands, mountains',
          population: '2000000000',
          climate: 'temperate',
          residents: [undefined, undefined, undefined],
          type: 'planets'
        }
      ]

      await fetchPlanetData();

      await expect(fetchPlanetData()).resolves.toEqual(expected)
    })

    it('sets an error when the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation((() => Promise.resolve({ status: 500 })))

      const expected = Error('Something is not right')

      await expect(fetchPlanetData()).rejects.toEqual(expected)
    })
  })

  describe('fetchResidents', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData.mockResidents)
      }))
    })


    it('calls fetch with the correct data', async () => {
      let mockResidentsArray = [
        'url',
        'url',
      ]

      await fetchResidents(mockResidentsArray);

      expect(window.fetch).toHaveBeenCalled()
    })

    it('returns the correct data', async () => {
      let mockResidents = [
        'url',
      ]
      const expected = [
        {
          name: 'Alderaan',
          terrain: 'grasslands, mountains',
          population: '2000000000',
          climate: 'temperate',
          residents: [undefined, undefined, undefined],
          type: 'planets'
        }
      ]

      await fetchResidents(mockResidents);

      await expect(fetchResidents()).resolves.toEqual(expected)
    })
  })
})