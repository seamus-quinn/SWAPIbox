import React from 'react';
import Card from '../Card/Card'

const CardContainer = ({ people, addToFavorites }) => {
  if (!people.length){
    return (
      <p>Please Select a Category</p>
    )
  } else {
    const cards = people.map((person, index) => {
      return <Card
      name={person.name}
      homeworld={person.homeworld}
      species={person.species}
      population={person.population}
      key={person.name}
      addToFavorites={addToFavorites}
      />
    })
    return(
      <div>
        {cards}
      </div>
    )
  }
}

export default CardContainer;