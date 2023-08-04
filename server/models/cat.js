const mongoose = require("mongoose");
const { Schema } = mongoose;

const catSchema = new Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
  likes: Array,
});
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
