const { config } = require("../config/");
const axios = require("axios");

const { WEATHER_API_KEY } = config;

const getCityWeather = async (req, res) => {
  try {
    const cityName = req.query.city;

    if (!cityName) {
      return res.status(400).send("City name is required");
    }
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${cityName}&days=2`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.stack);
    res.send(error);
  }
};

module.exports = { getCityWeather };
