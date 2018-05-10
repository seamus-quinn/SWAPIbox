import React, { Component } from 'react';
import filmsData from '../../data/filmsData'
import './App.css';
import OpeningCredits from '../../StatelessComponents/OpeningCredits/OpeningCredits';
import Controls from '../../StatelessComponents/Controls/Controls';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';
import { fetchPeopleData, fetchHomeworld, fetchVehicleData } from '../../API/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openingCrawl: null,
      isLoading: true,
      favorites: 0,
      people: [],
      favorites: [],
      vehicles: []
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

  addToFavorites = (name) => {
    const favorite = this.state.people.find(person => person.name === name)
    console.log(favorite)
    const favorites = [...this.state.favorites, favorite]
    console.log(favorites)
    this.setState({ favorites })
  }

  setPeopleData = async () => {
    if(!this.state.people.length) {
      const people = await fetchPeopleData()
      this.setState({ people })
    }
  }

  setVehicleData = async () => {
    if(!this.state.vehicles.length) {
      const vehicles = await fetchVehicleData();
      this.setState({ vehicles })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Trek :: Live Long and Prosper</h1>
        </header>
        <OpeningCredits openingCrawl={this.state.openingCrawl} openingCrawlIndex={this.state.openingCrawlIndex} />
        <Controls 
          favorites={this.state.favorites} 
          setPeopleData={this.setPeopleData}
          setVehicleData={this.setVehicleData}
        />
        <CardContainer 
          people={this.state.people} 
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
