const { Router } = require("express");
const router = Router();
const { getCityWeather } = require("../controllers/weather.controller");
router.get("/city", getCityWeather);

module.exports = router;
