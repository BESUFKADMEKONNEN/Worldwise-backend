const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// City Schema
const citySchema = new Schema(
  {
    cityName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
    },
    position: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("City", citySchema);
