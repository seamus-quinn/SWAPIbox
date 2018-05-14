import React from 'react';
import './Controls.css';
import PropTypes from 'prop-types';

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

Controls.proptypes = {
  favorites: PropTypes.array,
  setVehicleData: PropTypes.func,
  setPlanetData: PropTypes.func,
  setPeopleData: PropTypes.func,
  displayFavorites: PropTypes.func
}

export default Controls;
