import React, { Component } from 'react';
import { PeopleCard, VehicleCard, PlanetCard } from '../Cards/Cards'
import './CardContainer.css'


const CardContainer = ({ people, vehicles, planets, addToFavorites, display, favorites }) => {

  const cardCategories = () => {
    if (display === 'people') {
      return people.map((person, index) => {
        return (
          <PeopleCard
            person={person}
            addToFavorites={addToFavorites}
            display={display}
          />
        )
      })
    } else if (display === 'vehicles') {
      return vehicles.map((vehicle, index) => {
        return (
          <VehicleCard
            vehicle={vehicle}
            addToFavorites={addToFavorites}
            display={display}
          />
        )
      })
    } else if (display === 'planets') {
      return planets.map((planet, index) => {
        return (
          <PlanetCard
            planet={planet}
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
              person={favorite}
              addToFavorites={addToFavorites}
              display={display}
            />
          )
        } else if (favorite.type === 'vehicles') {
          return (
            <VehicleCard
              vehicle={favorite}
              addToFavorites={addToFavorites}
              display={display}
            />
          )
        } else {
          return (
            <PlanetCard
              planet={favorite}
              addToFavorites={addToFavorites}
              display={display}
            />
          )
        }
      })
    } else {
      return (
        <p className='default'>Please select a Category</p>
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