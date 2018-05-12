import React, { Component } from 'react';
import { PeopleCard, VehicleCard, PlanetCard } from '../Cards/Cards'
import './CardContainer.css'


const CardContainer = ({ people, vehicles, planets, addToFavorites, display, favorites }) => {

  const cardCategories = () => {
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
            residents={planet.residents}
            addToFavorites={addToFavorites}
            display={display}
          />
        )
      })
    } else if (display === 'favorites') {
      return favorites.map(favorite => {
        if (favorite.type === 'people') {
          return (
            <PeopleCard
              name={favorite.name}
              homeworld={favorite.homeworld}
              species={favorite.species}
              homeworldPop={favorite.population}
              addToFavorites={addToFavorites}
              display={display}
            />
          )
        } else if (favorite.type === 'vehicles') {
          return (
            <VehicleCard
              name={favorite.name}
              model={favorite.model}
              vehicleClass={favorite.class}
              passengers={favorite.passengers}
              addToFavorites={addToFavorites}
              display={display}
            />
          )
        } else {
          return (
            <PlanetCard
              name={favorite.name}
              terrain={favorite.terrain}
              population={favorite.population}
              climate={favorite.climate}
              residents={favorite.residents}
              addToFavorites={addToFavorites}
              display={display}
            />
          )
        }
      })
    } else {
      return (
        <p>Please select a Category</p>
      )
    }
  }
  
  return (
    <div className='card-container'>
      {cardCategories()}
    </div>
  )
}

export default CardContainer;