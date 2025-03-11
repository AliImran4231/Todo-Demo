const express = require("express");
const app = express();
require("dotenv").config();
const Todo = require("./Models/todoModel");
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", require("./routes/todoRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
