import React from 'react'

const Card = ({name, homeworld, species, population }) => {
  return(
    <div>
      <h1>{name}</h1>
      <p>{homeworld}</p>
      <p>{species}</p>
      <p>{population}</p>
      <button>Favorite</button>
    </div>
  )
}

export default Card