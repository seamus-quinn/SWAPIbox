import React from 'react';

const Controls = ({ favorites, setData }) => {
  return(
    <div>
      <p>Favorites</p>
      <button onClick={setData}>PEOPLE</button>
      <button>PLANETS</button>
      <button>VEHICLES</button>
    </div>
  )
}

export default Controls;
