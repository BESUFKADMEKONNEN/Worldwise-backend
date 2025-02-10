const City = require("../models/city");

const User = require("../models/user");

exports.getCities = (req, res, next) => {
  const userId = req.headers["userid"];
  // console.log(userId,req.userId);
  if (userId!==req.userId) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  City.find({ userId: userId })
    .then((cities) => {
      if (!cities || cities.length === 0) {
        
        return res
          .status(404)
          .json({ message: "No cities found for this user" });
      }
      // console.log(cities)
      res.status(200).json({
        message: "Cities fetched!",
        cities: cities,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createCity = (req, res, next) => {
  const cityName = req.body.cityName;
  const country = req.body.country;
  const emoji = req.body.emoji;
  const date = req.body.date;
  const notes = req.body.notes;
  const position = req.body.position;

  const city = new City({
    cityName: cityName,
    country: country,
    emoji: emoji,
    date: date,
    notes: notes,
    position: position,
    userId: req.userId,
  });

  city
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((result) => {
      res.status(201).json({
        message: "City created successfully!",
        city: city,
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.getCity = (req, res, next) => {
  const cityId = req.params.cityId;
  City.findById(cityId)
    .then((city) => {
      if (!city) {
        const error = new Error("Post const be found");
        error.statusCode = 404;
        throw error;
      }

      res.status(200).json({
        message: "Post fetched!",
        city: city,
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.deleteCity = (req, res, next) => {
  const cityId = req.params.cityId;
  City.findById(cityId)
    .then((city) => {
      if (!city) {
        const error = new Error("city cannot be found");
        error.statusCode = 404;
        throw error;
      }
      // console.log("test", city.userId.toString());

      if (city.userId.toString() !== req.userId) {
        const error = new Error(
          "Delete city Failed !!!(You cant delete this file ,you didnt create it)"
        );
        error.statusCode = 403;
        throw error;
      }

      return City.findByIdAndDelete(cityId);
    })
    .then((result) => {
      res.status(200).json({
        message: "City deleted!",
        city: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};
