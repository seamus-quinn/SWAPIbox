import React from 'react';
import './Cards.css'

const PeopleCard = ({ name, homeworld, species, homeworldPop, addToFavorites, display }) => {
  return (
    <div className='card people-card'>
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
    <div className='card vehicleCard'>
      <h1>{name}</h1>
      <p>Model: {model}</p>
      <p>Class: {vehicleClass}</p>
      <p>Number of Passengers: {passengers}</p>
      <button onClick={() => addToFavorites(name, display)}>Favorite</button>
    </div>
  )
}

const PlanetCard = ({name, terrain, population, climate, addToFavorites, display, residents}) => {
  const people = residents.map(resident => <p>{resident}</p>)
  console.log(people)
  return (
    <div className='card planetCard'>
      <h1>{name}</h1>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
      <p>Climate: {climate}</p>
      <div>Residents: {people}</div>
      <button onClick={() => addToFavorites(name, display)}>Favorite</button>
    </div>
  )
}

export {
  PeopleCard,
  VehicleCard,
  PlanetCard
} 