export default class DataCleaner {
  constructor(data) {
  }

  filmCleaner = (data) => data.results.map(({
    title,
    opening_crawl: openingText,
    release_date: releaseDate
  }) => ({
    title,
    openingText,
    releaseDate
  }))

  fetchPeopleData = () => {
    const url = 'https://swapi.co/api/people/'
    const people = fetch(url)
      .then(response => response.json())
      .then(data => this.fetchHomeWorld(data.results))
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
