import React, { Component } from 'react';
import DataCleaner from '../../Cleaner/cleaner'
import filmsData from '../../data/filmsData'
import './App.css';
import OpeningCredits from '../../StatelessComponents/OpeningCredits/OpeningCredits';
import Controls from '../../StatelessComponents/Controls/Controls';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';
import { parse, fetchPeopleData, fetchHomeworld } from '../../API/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openingCrawl: null,
      isLoading: true,
      favorites: 0,
      people: [],
      favorites: []
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

  setData = async () => {
    const people = await fetchPeopleData()
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
        <CardContainer people={this.state.people}/>
      </div>
    );
  }
}

export default App;
