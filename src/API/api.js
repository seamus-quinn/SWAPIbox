const fetchPeopleData = async () => {
  try {
    const url = 'https://swapi.co/api/people/'
    const response = await fetch(url);
    const data = await response.json();
    const people = await data.results.map(async person => {
      const homeworld = await fetchHomeWorld(person.homeworld)
      const species = await fetchSpecies(person.species)
      return {
        name: person.name,
        type: 'people',
        ...homeworld,
        species
      }
    })
    return Promise.all(people)
  } catch(error) {
    throw(new Error('Something is not right'))
  }
  
}

const fetchHomeWorld = async (url) => {
  try {
    const response = await fetch(url);
    const homeworld = await response.json();
    return {
      homeworld: homeworld.name,
      population: homeworld.population
    }
  } catch (error) {
    throw (new Error('Something is not right'))
  }
}

const fetchSpecies = async (url) => {
  try {
    const response = await fetch(url);
    const species = await response.json();
    return species.name;
  } catch(error) {
    throw (new Error('Something is not right'))
  }
}

const fetchVehicleData = async () => {
  try {
    const url = 'https://swapi.co/api/vehicles/';
    const response = await fetch(url);
    const data = await response.json();
    const vehicles = data.results.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        type: 'vehicles'
      }
    })
    return vehicles;
  } catch (error) {
    throw (new Error('Something is not right'))
  }
}

const fetchPlanetData = async () => {
  try {
    const url = 'https://swapi.co/api/planets/'
    const response = await fetch(url);
    const data = await response.json();
    const planets = await data.results.map(async planet => {
      const residents = await fetchResidents(planet.residents)
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residents,
        type: 'planets'
      }
    })
    return Promise.all(planets)
  } catch (error) {
    throw (new Error('Something is not right'))
  }
  
}

const fetchResidents = async (array) => {
  const residents = await array.map( async residentURL => {
    const response = await fetch(residentURL);
    const data = await response.json();
    return data.name;
  })
  return Promise.all(residents);
}


export {
  fetchPeopleData,
  fetchHomeWorld,
  fetchSpecies,
  fetchVehicleData,
  fetchPlanetData,
  fetchResidents
}