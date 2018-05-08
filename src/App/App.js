import React, { Component } from 'react';
import StarWarsRepo from '../Cleaner/cleaner'
import filmsData from '../data/filmsData'
import './App.css';
import OpeningCredits from '../OpeningCredits/OpeningCredits'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starWarsRepo: new StarWarsRepo,
      openingCrawl: null,
      isLoading: true
    }
  }

  componentDidMount() {
    const starWarsRepo = this.state.starWarsRepo;
    const openingCrawl = starWarsRepo.filmCleaner(filmsData)
    this.setState({ openingCrawl, isLoading: false })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Trek :: Live Long and Prosper</h1>
        </header>
        <OpeningCredits openingCrawl={this.state.openingCrawl} />
      </div>
    );
  }
}

export default App;
