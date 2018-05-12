import React, { Component } from 'react';
// import Card from '../Card/Card'

const CardContainer = ({ people, vehicles, planets, addToFavorites, display }) => {
  if (display === 'people') {
    return people.map((person, index) => {
      return (
        <div>
          <h1>{person.name}</h1>
          <p>Homeworld: {person.homeworld}</p>
          <p>Species: {person.species}</p>
          <p>Homeworld Population: {person.population}</p>
          <button onClick={() => addToFavorites(person.name, display)}>Favorite</button>
        </div>
      ) 
    })
  } else if (display === 'vehicles') {
    return vehicles.map((vehicle, index) => {
      return (
        <div>
          <h1>{vehicle.name}</h1>
          <p>Model: {vehicle.model}</p>
          <p>Class: {vehicle.class}</p>
          <p>Number of Passengers: {vehicle.passengers}</p>
          <button onClick={() => addToFavorites(vehicle.name, display)}>Favorite</button>
        </div>
      )
    })
  } else if (display === 'planets') {
    return planets.map((planet, index) => {
      return (
        <div>
          <h1>{planet.name}</h1>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <p>Climate: {planet.climate}</p>
          {/* <p>Residents: {...planet.residents}</p> */}
          <button onClick={() => addToFavorites(planet.name, display)}>Favorite</button>
        </div>
      )
    })
  } else {
    return( 
      <p>Please select a Category</p>
    )
  }
}

export default CardContainer;