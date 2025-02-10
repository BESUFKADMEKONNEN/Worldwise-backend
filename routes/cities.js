const express = require("express");
const isAuth = require("../middleware/is-auth");

const citiesController = require("../controllers/cities");

const router = express.Router();

router.get("/cities", isAuth, citiesController.getCities);

router.post("/cities", isAuth, citiesController.createCity);

router.get("/cities/:cityId", isAuth, citiesController.getCity);

router.delete("/cities/:cityId", isAuth, citiesController.deleteCity);

module.exports = router;
