import React from 'react';

const Controls = ({ favorites, setPeopleData, setVehicleData }) => {
  return(
    <div>
      <p>Favorites: <span>{favorites.length}</span></p>
      <button onClick={setPeopleData}>PEOPLE</button>
      <button>PLANETS</button>
      <button onClick={setVehicleData}>VEHICLES</button>
    </div>
  )
}

export default Controls;
