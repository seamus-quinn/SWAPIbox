export default class DataCleaner {
  constructor(data) {
  }

  filmCleaner = (data) => {
    return data.results.map(movie => {
      return Object.keys(movie).reduce((acc, key) => {
        acc = {
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }
        return acc;
      }, {})
    })
  }

  fetchPeopleData = () => {
    const url = 'https://swapi.co/api/people/'
    const people = fetch(url)
      .then(response => response.json())
      .then(data => this.fetchHomeWorld(data.results))
      .then(people => people)
    return people;
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


}
