const {Router} = require('express');
const {getAllCountries, getCountryById} = require("../controllers/country");
const routerCountry = Router ();

routerCountry.get("/", async (req, res) => {
    const {name} = req.query
    const countries = await getAllCountries(name);
    if (countries.error) {
      res.status(404).json({ error: countries.error });
    } else {
      res.status(200).json(countries);
    }
  });

  routerCountry.get("/:idPais", async (req, res) => {
    const country = await getCountryById(req.params.idPais.toUpperCase());
  
    if (country.error) {
      res.status(404).json({ error: country.error });
    } else {
      res.status(200).json(country);
    }
  });



module.exports = routerCountry