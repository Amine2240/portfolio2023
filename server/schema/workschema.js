const mongoose = require("mongoose");

const workschema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  weblink: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  resumecolor: {
    type: String,
    required: true,
  },
  codelink: {
    type: String,
    required: true,
  },
});

const Workmodel = mongoose.model("work", workschema);
module.exports = Workmodel;
