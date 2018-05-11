import React, { Component } from 'react';
import Card from '../Card/Card'

const CardContainer = ({ people, vehicles, planets, addToFavorites, display }) => {
  if (display === 'people') {
    const peopleCards = people.map((person, index) => {
      return <Card
        name={person.name}
        dataTwo={person.homeworld}
        dataThree={person.species}
        dataFour={person.population}
        key={person.name}
        addToFavorites={addToFavorites}
      />
    })
    return peopleCards
  } else if (display === 'vehicles') {
    const vehicleCards = vehicles.map((vehicle, index) => {
      return <Card
        name={vehicle.name}
        dataTwo={vehicle.model}
        dataThree={vehicle.class}
        dataFour={vehicle.passengers}
        key={vehicle.name}
        addToFavorites={addToFavorites}
      />
    })
    return vehicleCards;
  } else if (display === 'planets') {
    const planetCards = planets.map((planet, index) => {
      return <Card
        name={planet.name}
        dataTwo={planet.terrain}
        dataThree={planet.population}
        dataFour={planet.climate}
        key={planet.name}
        addToFavorites={addToFavorites}
      />
    })
    return planetCards
  } else {
    return( 
      <p>Please select a Category</p>
    )
  }
}

export default CardContainer;