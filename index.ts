import { Request, Response } from "express";

const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/user");
const sequelize = require("./src/services/db");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request: Request, response: Response) => {
  response.json("Hello World!");
});

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("fisting on port " + port);
});
