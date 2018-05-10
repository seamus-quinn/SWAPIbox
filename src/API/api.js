const fetchPeopleData = async () => {
  const url = 'https://swapi.co/api/people/'
  const response = await fetch(url);
  const data = await response.json();
  const people = await data.results.map( async person => {
    const homeworld = await fetchHomeWorld(person.homeworld)
    const species = await fetchSpecies(person.species)
    return {
      name: person.name,
      ...homeworld,
      species
    }
  })
return Promise.all(people)
}

const fetchHomeWorld = async (url) => {
  const response = await fetch(url);
  const homeworld = await response.json();
  return {
    homeworld: homeworld.name,
    population: homeworld.population
  }
}

const fetchSpecies = async (url) => {
  const response = await fetch(url);
  const species = await response.json();
  return species.name;
}

const fetchVehicleData = async () => {
  const url = 'https://swapi.co/api/vehicles/';
  const response = await fetch(url);
  const data = await response.json();
  const vehicles = data.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  })
  return vehicles;
}


export {
  fetchPeopleData,
  fetchHomeWorld,
  fetchVehicleData
}