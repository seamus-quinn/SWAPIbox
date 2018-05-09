export default class API {
  constructor(url) {
  }

  parse(url) {
    return fetch(url)
      .then(response => response.json())
  }

  fetchPeopleData = (url) => {
    const people = this.parse(url)
      .then(data => this.fetchHomeWorld(data.results))
    return people;
  }

  fetchHomeWorld = (data) => {
    const unresolvedData = data.map(person => {
      return this.parse(person.homeworld)
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

