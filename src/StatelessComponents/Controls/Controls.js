import React from 'react';

const Controls = ({ favorites, setPeopleData, setVehicleData, setPlanetData, displayFavorites }) => {
  return(
    <div>
      <button onClick={setPeopleData}>PEOPLE</button>
      <button onClick={setPlanetData}>PLANETS</button>
      <button onClick={setVehicleData}>VEHICLES</button>
      <button onClick={displayFavorites}>Favorites: <span>{favorites.length}</span></button>
    </div>
  )
}

export default Controls;
