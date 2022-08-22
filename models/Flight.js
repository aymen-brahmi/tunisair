const mongoose = require("mongoose");

const schema = mongoose.Schema;

const flightSchema = new schema({
  departure_terminal: {
    type: String,
    required: true,
  },
  arrival_terminal: {
    type: String,
    required: true,
  },
  flight_number: {
    type: String,
    required: true,
    unique: true,
  },
  hour_flight: {
    type: String,
    required: true,
  },
  time_flight: {
    type: String,
    required: true,
  },
});

module.exports = Flight = mongoose.model("Flight", flightSchema);
