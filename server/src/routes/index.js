const { Router } = require("express");
const routerCountry = require("./country")
const routerActivity= require("./activity")
const router = Router()


router.use("/country", routerCountry )
router.use("/activity", routerActivity )

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  });

module.exports = router;
