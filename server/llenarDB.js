const { Country } = require('./src/db')
const axios = require('axios')

const llenarDb = async () => {

  const { data } = await axios("http://localhost:5000/countries");
  data.forEach(country => {
    const newCountry = {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.png,
      continent: country.continents[0],
      capital:
        Array.isArray(country.capital) && country.capital.length > 0
          ? country.capital[0]
          : '',
      population: country.population,
    };
    Country.create(newCountry)
  });
}

module.exports = llenarDb