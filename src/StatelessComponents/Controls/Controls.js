import React from 'react';
import './Controls.css'

const Controls = ({ favorites, setPeopleData, setVehicleData, setPlanetData, displayFavorites }) => {
  return(
    <div className='controls'>
      <button onClick={setPeopleData}>PEOPLE</button>
      <button onClick={setPlanetData}>PLANETS</button>
      <button onClick={setVehicleData}>VEHICLES</button>
      <button onClick={displayFavorites}>Favorites: <span>{favorites.length}</span></button>
    </div>
  )
}

export default Controls;
