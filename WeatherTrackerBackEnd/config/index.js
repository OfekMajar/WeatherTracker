const dotenv = require("dotenv");

dotenv.config();

const { PORT } = process.env;
const { WEATHER_API_KEY } = process.env;
const config = {
  PORT,
  WEATHER_API_KEY,
};

module.exports = { config };
