import React, { Component } from 'react';
import StarWarsRepo from '../../Cleaner/cleaner'
import filmsData from '../../data/filmsData'
import './App.css';
import OpeningCredits from '../../StatelessComponents/OpeningCredits/OpeningCredits';
import Controls from '../../StatelessComponents/Controls/Controls';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starWarsRepo: new StarWarsRepo,
      openingCrawl: null,
      isLoading: true,
      favorites: 0,
      displayType: {
        people: false,
        planets: false,
        vehicles: false
      }
    }
  }


  componentDidMount() {
    const url = 'https://swapi.co/api/films/';
    const starWarsRepo = this.state.starWarsRepo;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const openingCrawl = starWarsRepo.filmCleaner(data)
        this.setState({ openingCrawl, isLoading: false })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Trek :: Live Long and Prosper</h1>
        </header>
        <OpeningCredits openingCrawl={this.state.openingCrawl} />
        <Controls favorites={this.state.favorites} />
        <CardContainer />
      </div>
    );
  }
}

export default App;
