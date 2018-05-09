import React from 'react'

const Card = ({name, homeworld, species, population, addToFavorites }) => {
  return(
    <div>
      <h1>{name}</h1>
      <p>{homeworld}</p>
      <p>{species}</p>
      <p>{population}</p>
      <button onClick={() => addToFavorites(name)}>Favorite</button>
    </div>
  )
}

export default Card