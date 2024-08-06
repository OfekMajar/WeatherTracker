const express = require("express");
const cors = require("cors");

const weatherRouter = require("./routes/weather");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/weather", weatherRouter);

module.exports = app;
