const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  await Cat.create({
    name: "Felix",
    color: "grey and white",
    hasClaws: true,
    likes: ["sleepin gin the sun", "sipping milk", "climbing trees"],
  });
  await Cat.create({
    name: "Cedric",
    color: "ginger",
    hasClaws: false,
    likes: ["fighting in the street", "extreme ironing", "eating out of the trash bin"],
  });
  console.log("Go Kitty Go");
  mongoose.disconnect();
}

seed();
