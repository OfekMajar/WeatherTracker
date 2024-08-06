const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { config } = require("../config/");
const { WEATHER_API_KEY } = config;
router.get("/city", async (req, res) => {
  try {
    const cityName = req.query.city;
    const currHour = new Date().getHours();

    const amountOfDays = currHour < 20 ? 1 : 2;
    if (!cityName) {
      return res.status(400).send("City name is required");
    }
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${cityName}&days=${amountOfDays}`
    );
    // http://api.weatherapi.com/v1/forecast.json?key=6eef91e41fb94946ad7150055240508&q=tel aviv&days=1&aqi=no&alerts=no
    res.json(response.data);
  } catch (error) {
    console.error(error.stack);
    res.send(error);
  }
});
module.exports = router;
