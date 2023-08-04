const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8087;

const app = express();
app.use(cors());
app.use(bp.json());

const Cat = require("./models/cat");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  // response.json(request.params);
  response.status(200).json("Hey Ho yippeee yo yo");
});

app.get("/cats", async (request, response) => {
  console.log(request);
  const allCats = await Cat.find(request.query);
  response.status(200).json(allCats);
});

app.get("/cats/:id", async (request, response) => {
  console.log(request);
  const theCat = await Cat.find({ _id: request.params.id });
  response.json(theCat);
});

app.get;

// app.post("/cats", async (request, response) => {
//   const newCat = await Cat.create(request.body);
//   response.status(200).json(newCat);
// });

app.post("/cats", async (request, response) => {
  const newCat = await Cat.create(request.body);
  response.status(200).json(newCat);
});

//

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
