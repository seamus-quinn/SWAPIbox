import React, { Component } from 'react';
import DataCleaner from '../../Cleaner/cleaner'
import filmsData from '../../data/filmsData'
import './App.css';
import OpeningCredits from '../../StatelessComponents/OpeningCredits/OpeningCredits';
import Controls from '../../StatelessComponents/Controls/Controls';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';
import API from '../../API/api';

const api = new API;
const dataCleaner = new DataCleaner;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCleaner: new DataCleaner,
      openingCrawl: null,
      isLoading: true,
      favorites: 0,
      people: []
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films/';
    const dataCleaner = this.state.dataCleaner;
    
    fetch(url)
    .then(response => response.json())
    .then(data => dataCleaner.filmCleaner(data))
    .then(openingCrawls => {
      const randomIndex = Math.floor(Math.random() * Math.floor(openingCrawls.length));
      const openingCrawl = openingCrawls[randomIndex];
      this.setState({ openingCrawl, isLoading: false})
    })
  }

  setData = async () => {
    const people = await this.state.dataCleaner.fetchPeopleData()
    this.setState({ people })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Trek :: Live Long and Prosper</h1>
        </header>
        <OpeningCredits openingCrawl={this.state.openingCrawl} openingCrawlIndex={this.state.openingCrawlIndex} />
        <Controls favorites={this.state.favorites} setData={this.setData}/>
        <CardContainer />
      </div>
    );
  }
}

export default App;
