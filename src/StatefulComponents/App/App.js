import React, { Component } from 'react';
import filmsData from '../../data/filmsData'
import './App.css';
import OpeningCredits from '../../StatelessComponents/OpeningCredits/OpeningCredits';
import Controls from '../../StatelessComponents/Controls/Controls';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';
import { fetchPeopleData, fetchHomeworld, fetchVehicleData, fetchPlanetData } from '../../API/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openingCrawl: null,
      isLoading: true,
      favorites: 0,
      people: [],
      favorites: [],
      vehicles: [],
      planets: [],
      display: null,
    }
  }

  async componentDidMount() {
    const url = 'https://swapi.co/api/films/';
    
    const response = await fetch(url);
    const data = await response.json();
    const cleanedData = await data.results.map(({
      title,
      opening_crawl: openingText,
      release_date: releaseDate
    }) => ({
      title,
      openingText,
      releaseDate
    }))
    const randomIndex = Math.floor(Math.random() * Math.floor(cleanedData.length));
    const openingCrawl = cleanedData[randomIndex];
    this.setState({ openingCrawl, isLoading: false })
  }

  addToFavorites = (name, display) => {
    const newFavorite = this.state[display].find(thing => thing.name === name)
    const favorites = this.state.favorites;

    if(!favorites.length) {
      favorites.push(newFavorite)
      this.setState({ favorites })
    } else {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].name === newFavorite.name) {
          favorites.splice(i, 1)
          this.setState({ favorites })
        } else {
          const newFavorites = [...favorites, newFavorite]
          this.setState({ favorites: newFavorites })
        }
      }
    }
  }

  displayFavorites = () => {
    this.setState({display: 'favorites'})
  }

  setPeopleData = async () => {
    if(!this.state.people.length) {
      const people = await fetchPeopleData()
      this.setState({ people, display: 'people' })
    }
    this.setState({ display: 'people' })
  }

  setVehicleData = async () => {
    if(!this.state.vehicles.length) {
      const vehicles = await fetchVehicleData();
      this.setState({ vehicles, display: 'vehicles' })
    }
    this.setState({ display: 'vehicles' })
  }

  setPlanetData = async () => {
    if(!this.state.planets.length) {
      const planets = await fetchPlanetData();
      this.setState({ planets, display: 'planets' })
    }
    this.setState({ display: 'planets' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPIbox :: Live Long and Prosper</h1>
          
        </header>
        <Controls
          favorites={this.state.favorites}
          setPeopleData={this.setPeopleData}
          setVehicleData={this.setVehicleData}
          setPlanetData={this.setPlanetData}
          displayFavorites={this.displayFavorites}
        />
        <CardContainer 
          people={this.state.people}
          vehicles={this.state.vehicles}
          planets={this.state.planets} 
          addToFavorites={this.addToFavorites}
          display={this.state.display}
          favorites={this.state.favorites}
        />
        <OpeningCredits openingCrawl={this.state.openingCrawl} openingCrawlIndex={this.state.openingCrawlIndex} />
      </div>
    );
  }
}

export default App;
