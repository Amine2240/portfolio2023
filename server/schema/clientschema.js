const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  need: {
    type: String,
    required: true,
  },
});

const Clientmodel = mongoose.model("client", ClientSchema);
module.exports = Clientmodel;
