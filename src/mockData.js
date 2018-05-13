const mockPeopleData = {
  "count": 87,
  "next": "https://swapi.co/api/people/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      "species": [
        "https://swapi.co/api/species/1/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.co/api/people/1/"
    }
  ]
}

const mockHomeworldData = {
  "name": "Tatooine",
  "rotation_period": "23",
  "orbital_period": "304",
  "diameter": "10465",
  "climate": "arid",
  "gravity": "1 standard",
  "terrain": "desert",
  "surface_water": "1",
  "population": "200000",
  "residents": [
    "https://swapi.co/api/people/1/",
    "https://swapi.co/api/people/2/",
    "https://swapi.co/api/people/4/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/8/",
    "https://swapi.co/api/people/9/",
    "https://swapi.co/api/people/11/",
    "https://swapi.co/api/people/43/",
    "https://swapi.co/api/people/62/"
  ],
  "films": [
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/"
  ],
  "created": "2014-12-09T13:50:49.641000Z",
  "edited": "2014-12-21T20:48:04.175778Z",
  "url": "https://swapi.co/api/planets/1/"
}

const mockPlanetData = {
  "count": 61,
  "next": "https://swapi.co/api/planets/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Alderaan",
      "rotation_period": "24",
      "orbital_period": "364",
      "diameter": "12500",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grasslands, mountains",
      "surface_water": "40",
      "population": "2000000000",
      "residents": [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ],
      "films": [
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T11:35:48.479000Z",
      "edited": "2014-12-20T20:58:18.420000Z",
      "url": "https://swapi.co/api/planets/2/"
    }
  ]
}

const mockVehiclesData = {
  "count": 39,
  "next": "https://swapi.co/api/vehicles/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T15:36:25.724000Z",
      "edited": "2014-12-22T18:21:15.523587Z",
      "url": "https://swapi.co/api/vehicles/4/"
    }
  ]
}

const mockSpeciesData = {
  "name": "Human",
  "classification": "mammal",
  "designation": "sentient",
  "average_height": "180",
  "skin_colors": "caucasian, black, asian, hispanic",
  "hair_colors": "blonde, brown, black, red",
  "eye_colors": "brown, blue, green, hazel, grey, amber",
  "average_lifespan": "120",
  "homeworld": "https://swapi.co/api/planets/9/",
  "language": "Galactic Basic",
  "people": [
    "https://swapi.co/api/people/1/",
    "https://swapi.co/api/people/4/",
    "https://swapi.co/api/people/5/",
    "https://swapi.co/api/people/6/",
    "https://swapi.co/api/people/7/",
    "https://swapi.co/api/people/9/",
    "https://swapi.co/api/people/10/",
    "https://swapi.co/api/people/11/",
    "https://swapi.co/api/people/12/",
    "https://swapi.co/api/people/14/",
    "https://swapi.co/api/people/18/",
    "https://swapi.co/api/people/19/",
    "https://swapi.co/api/people/21/",
    "https://swapi.co/api/people/22/",
    "https://swapi.co/api/people/25/",
    "https://swapi.co/api/people/26/",
    "https://swapi.co/api/people/28/",
    "https://swapi.co/api/people/29/",
    "https://swapi.co/api/people/32/",
    "https://swapi.co/api/people/34/",
    "https://swapi.co/api/people/43/",
    "https://swapi.co/api/people/51/",
    "https://swapi.co/api/people/60/",
    "https://swapi.co/api/people/61/",
    "https://swapi.co/api/people/62/",
    "https://swapi.co/api/people/66/",
    "https://swapi.co/api/people/67/",
    "https://swapi.co/api/people/68/",
    "https://swapi.co/api/people/69/",
    "https://swapi.co/api/people/74/",
    "https://swapi.co/api/people/81/",
    "https://swapi.co/api/people/84/",
    "https://swapi.co/api/people/85/",
    "https://swapi.co/api/people/86/",
    "https://swapi.co/api/people/35/"
  ],
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/7/",
    "https://swapi.co/api/films/5/",
    "https://swapi.co/api/films/4/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/"
  ],
  "created": "2014-12-10T13:52:11.567000Z",
  "edited": "2015-04-17T06:59:55.850671Z",
  "url": "https://swapi.co/api/species/1/"
}

const mockResidents = [
  {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "https://swapi.co/api/planets/2/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "https://swapi.co/api/people/5/"
  }
]

export {
  mockPeopleData,
  mockHomeworldData,
  mockPlanetData,
  mockVehiclesData,
  mockSpeciesData,
  mockResidents
}
