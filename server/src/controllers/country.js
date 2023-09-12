const { Country, Activity } = require("../db");
const { Op } = require("sequelize")


const getAllCountries = async (name) => {
    let countries = null;

    try {
        if (name) {
            const oneCountry = Country.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` }
                }

            })
            return oneCountry
        } else {
            countries = await Country.findAll();
        }



        if (countries.length === 0)
            throw new Error("No countries found with the specified name.");

        return countries;
    } catch (error) {
        return { error: error.message };
    }
};

const getCountryById = async (idPais) => {
    try {
      let countryFound = null;
  
      if (idPais) {
        countryFound = await Country.findByPk(idPais, {
          include: [
            {
              model: Activity,
              through: { attributes: [] },
            },
          ],
          attributes: { exclude: ["country_activity"] },
        });
      }
  
      if (countryFound) return countryFound;
      else throw new Error("Failed to process the request.");
    } catch (error) {
      return { error: error.message };
    }
  };
  

module.exports ={ 
    getAllCountries,
    getCountryById
};