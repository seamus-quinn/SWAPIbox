import React from 'react';

const Controls = ({ favorites, setPeopleData, setVehicleData, setPlanetData, displayFavorites }) => {
  return(
    <div>
      <p onClick={displayFavorites}>Favorites: <span>{favorites.length}</span></p>
      <button onClick={setPeopleData}>PEOPLE</button>
      <button onClick={setPlanetData}>PLANETS</button>
      <button onClick={setVehicleData}>VEHICLES</button>
    </div>
  )
}

export default Controls;
