export default class StarWarsRepo {
  constructor(data) {
    this.openingCrawls = this.filmCleaner(data.results)
  }

  filmCleaner = (data) => {
    return data.map(movie => {
      return Object.keys(movie).reduce((acc, key) => {
        acc = {
          title: movie.title,
          "opening crawl": movie.opening_crawl,
          "release date": movie.release_date
        }
        return acc;
      }, {})
    })
  }

}
