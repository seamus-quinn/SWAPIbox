import React, { Component } from 'react';
import { PeopleCard, VehicleCard, PlanetCard } from '../Cards/Cards'


const CardContainer = ({ people, vehicles, planets, addToFavorites, display }) => {
  if (display === 'people') {
    return people.map((person, index) => {
      return (
        <PeopleCard
          name={person.name}
          homeworld={person.homeworld}
          species={person.species}
          homeworldPop={person.population}
          addToFavorites={addToFavorites}
          display={display}
        />
      ) 
    })
  } else if (display === 'vehicles') {
    return vehicles.map((vehicle, index) => {
      return (
        <VehicleCard 
          name={vehicle.name}
          model={vehicle.model}
          vehicleClass={vehicle.class}
          passengers={vehicle.passengers}
          addToFavorites={addToFavorites}
          display={display}
        />
      )
    })
  } else if (display === 'planets') {
    return planets.map((planet, index) => {
      return (
        <PlanetCard
          name={planet.name}
          terrain={planet.terrain}
          population={planet.population}
          climate={planet.climate}
          addToFavorites={addToFavorites}
          display={display}
        />
      )
    })
  } else {
    return( 
      <p>Please select a Category</p>
    )
  }
}

export default CardContainer;