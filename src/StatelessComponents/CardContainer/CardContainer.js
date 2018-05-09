import React from 'react';
import Card from '../Card/Card'

const CardContainer = ({ people }) => {
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
      homeworldPop={person.homeworldPop}
      key={index}
      />
    })
    console.log(cards)
    return(
      <div>
        {cards}
      </div>
    )
  }
}

export default CardContainer;