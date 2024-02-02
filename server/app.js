const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5000",
      "http://localhost:5173",
      "https://aminekdm-portfolio.netlify.app",
    ],
  })
);
app.use(express.json());
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
const clientRoute = require("./routes/clientroutes");

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("connected succefully to db");
  })

  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/", clientRoute);

app.listen(5000, () => {
  console.log("connected succefully to the server");
});
