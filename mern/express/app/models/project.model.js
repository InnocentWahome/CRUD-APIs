const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = model("Project", ProjectSchema);
