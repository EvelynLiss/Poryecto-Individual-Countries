const { Activity, Country } = require('../db');


const postActivity = async (activityData) => {
    try {
      const { name, difficulty, season, countryId } =
        activityData;
  
      if (
        !name ||
        !difficulty ||
        !season ||
        !countryId ||
        !countryId.length 
        
      ) {
        throw new Error("Datos insuficientes");
      }
  
      const newActivity = {
        name,
        difficulty,
        season
        
      };
  
      const createdActivity = await Activity.create(newActivity);
  
      if (!createdActivity) {
        throw new Error("Error creating the activity.");
      }
  
      const countries = await Country.findAll({
        where: { id: countryId },
      });
  
      if (!countries || !countries.length || !countryId.length) {
        throw new Error("Invalid countries.");
      }
  
      await createdActivity.addCountries(countries);
  
      return { message: `The activity '${name}' has been created.` };
    } catch (error) {
      return { error: error.message };
    }
  };
       

const getActivity= async () => {
    try {
      const activities = await Activity.findAll({
        include: [Country]
      });
  
      if (!activities || activities.length === 0) {
        throw new Error("There are no activities");
      }
  
      return activities;
    } catch (error) {
      throw error.message;
    }
  };
  



module.exports = {
    postActivity,
    getActivity
};