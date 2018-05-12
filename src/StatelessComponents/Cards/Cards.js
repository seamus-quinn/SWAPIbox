import React from 'react';

const PeopleCard = ({ name, homeworld, species, homeworldPop, addToFavorites, display }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Homeworld: {homeworld}</p>
      <p>Species: {species}</p>
      <p>Homeworld Population: {homeworldPop}</p>
      <button onClick={() => addToFavorites(name, display)}>Favorite</button>
    </div>
  )
}

const VehicleCard = ({name, model, vehicleClass, passengers, addToFavorites, display}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Model: {model}</p>
      <p>Class: {vehicleClass}</p>
      <p>Number of Passengers: {passengers}</p>
      <button onClick={() => addToFavorites(name, display)}>Favorite</button>
    </div>
  )
}

const PlanetCard = ({name, terrain, population, climate, addToFavorites, display}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
      <p>Climate: {climate}</p>
      {/* <p>Residents: {...residents}</p> */}
      <button onClick={() => addToFavorites(name, display)}>Favorite</button>
    </div>
  )
}

export {
  PeopleCard,
  VehicleCard,
  PlanetCard
} 