export default class StarWarsRepo {
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


}
