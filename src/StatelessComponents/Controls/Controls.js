import React from 'react';

const Controls = ({ favorites, fetchPeopleData }) => {
  return(
    <div>
      <p>Favorites {favorites}</p>
      <button onClick={fetchPeopleData}>PEOPLE</button>
      <button>PLANETS</button>
      <button>VEHICLES</button>
    </div>
  )
}

export default Controls;
