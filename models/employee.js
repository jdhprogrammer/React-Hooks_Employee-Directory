const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  
  gender: String,
  name: {
    title: String,
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  location: {
    street: {
      number: { type: Number, required: true },
      name: { type: String, required: true }
    },
    city: { type: String, required: true },
    state: String,
    country:  { type: String, required: true },
    postcode: { type: Number, required: true },
    coordinates: {
      latitude: Number,
      longitude: Number
    },
    timezone: {
      offset: String,
      description: String
    }
  },
  email: String,
  login: {
    uuid: String,
    username: String,
    password: String,
    salt: String,

    md5: String,

    sha1: String,
    sha256: String
  },
    dob: {
      date: String,
      age: Number
  },
    registered: {
      date: String,
      age: Number
  },
    phone: String,
    cell: String,
    ID: {
      name: String,
      value: String
  },
    picture: {
      large: String,
      medium: String,
      thumbnail: String
  },
    nat: String
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
