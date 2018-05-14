import React from 'react';
import './Cards.css'
import PropTypes from 'prop-types';

const PeopleCard = ({ person, addToFavorites, display }) => {
  return (
    <div className='card people-card'>
      <h1 className='card-header'>{person.name}</h1>
      <p>Homeworld: {person.homeworld}</p>
      <p>Species: {person.species}</p>
      <p>Homeworld Population: {person.homeworldPop}</p>
      <button onClick={() => addToFavorites(person.name, display)}>Favorite</button>
    </div>
  )
}

const VehicleCard = ({vehicle, addToFavorites, display}) => {
  return (
    <div className='card vehicleCard'>
      <h1 className='card-header'>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Class: {vehicle.class}</p>
      <p>Number of Passengers: {vehicle.passengers}</p>
      <button onClick={() => addToFavorites(vehicle.name, display)}>Favorite</button>
    </div>
  )
}

const PlanetCard = ({ planet, addToFavorites, display }) => {
  const people = planet.residents.map(resident => <p>{resident}</p>)
  return (
    <div className='card planetCard'>
      <h1 className='card-header'>{planet.name}</h1>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Climate: {planet.climate}</p>
      <div>Residents: {people}</div>
      <button onClick={() => addToFavorites(planet.name, display)}>Favorite</button>
    </div>
  )
}

PeopleCard.propTypes = {
  people: PropTypes.array,
  addToFavorites: PropTypes.func,
  display: PropTypes.string
}

VehicleCard.propTypes = {
  vehicles: PropTypes.array,
  addToFavorites: PropTypes.func,
  display: PropTypes.string
}

PlanetCard.propTypes = {
  planets: PropTypes.array,
  addToFavorites: PropTypes.func,
  display: PropTypes.string
}

export {
  PeopleCard,
  VehicleCard,
  PlanetCard
} 