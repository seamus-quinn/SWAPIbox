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
      people: []
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

  fetchPeopleData = () => {
    const url = 'https://swapi.co/api/people/'
    fetch(url)
      .then(response => response.json())
      .then(data => this.fetchHomeWorld(data.results))
      .then(people => this.setState({people}))
  }

  fetchHomeWorld = (data) => {
    const unresolvedData = data.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => {
          return {
            name: person.name,
            homeworld: data.name,
            species: null,
            homeworldPop: data.population
          }
        })
    })
    return Promise.all(unresolvedData)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Trek :: Live Long and Prosper</h1>
        </header>
        <OpeningCredits openingCrawl={this.state.openingCrawl} />
        <Controls favorites={this.state.favorites} fetchPeopleData={this.fetchPeopleData}/>
        <CardContainer />
      </div>
    );
  }
}

export default App;
