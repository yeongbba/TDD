const express = require("express");
const app = express();
const PORT = 3333;
require("dotenv").config();

const productRoutes = require("./routes");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected..."))
  .catch((err) => console.log(err));

app.use("/api/products", productRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT);

console.log(`Running on port ${PORT}`);
