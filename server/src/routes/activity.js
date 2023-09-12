const {Router} = require('express');
const {getActivity, postActivity} = require ('../controllers/activity');

const routerActivity = Router ();


routerActivity.get("/", async (req, res) => {
  try {
    const activities = await getActivity()
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({error : error.message });
  }
 })


routerActivity.post("/", async (req, res) => {
  const createdActivity = await postActivity(req.body);

  if (createdActivity.error) {
    res.status(400).json({ error: createdActivity.error });
  } else {
    res.status(200).json(createdActivity);
  }

});





module.exports = routerActivity