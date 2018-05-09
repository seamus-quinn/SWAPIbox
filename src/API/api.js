const parse = (url) => {
  return fetch(url)
    .then(response => response.json())
}

const fetchPeopleData = (url) => {
  const people = parse(url)
    .then(data => fetchHomeWorld(data.results))
  return people;
}

const fetchHomeWorld = (data) => {
  const unresolvedData = data.map(person => {
    return parse(person.homeworld)
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

const fetchSpecies = (data) => {
  
}


export {
  parse,
  fetchPeopleData,
  fetchHomeWorld
}