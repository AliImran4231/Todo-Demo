const express = require("express");
const { connectDB } = require("./config/db");
require("dotenv").config();
const Todo = require("./Model/todoModels");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/todos", require("./routes/todoRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
