const dotenv = require("dotenv");

dotenv.config();

const { PORT } = process.env;

const config = {
  PORT,
};

module.exports = { config };
