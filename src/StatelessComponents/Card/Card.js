import React from 'react'

const Card = ({name, dataTwo, dataThree, dataFour, addToFavorites }) => {
  return(
    <div>
      <h1>{name}</h1>
      <p>{dataTwo}</p>
      <p>{dataThree}</p>
      <p>{dataFour}</p>
      <button onClick={() => addToFavorites(name)}>Favorite</button>
    </div>
  )
}

export default Card