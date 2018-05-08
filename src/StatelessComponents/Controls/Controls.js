import React from 'react';

const Controls = ({ favorites }) => {
  return(
    <div>
      <p>Favorites {favorites}</p>
      <button>PEOPLE</button>
      <button>PLANETS</button>
      <button>VEHICLES</button>
    </div>
  )
}

export default Controls;
