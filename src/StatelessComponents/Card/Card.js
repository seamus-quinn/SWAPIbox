import React from 'react'

const Card = ({name, homeworld, species, homeworldPop}) => {
  return(
    <div>
      <h1>{name}</h1>
      <p>{homeworld}</p>
      <p>{species}</p>
      <p>{homeworldPop}</p>
    </div>
  )
}

export default Card