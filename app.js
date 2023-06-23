const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const aboutRoutes = require("./routes/aboutRoutes");

require("dotenv").config();

const db_password = process.env.DB_PASSWORD;
const db_user = process.env.DB_USER;

//? express app
const app = express();

//? connect to mongodb
const dbURI = `mongodb+srv://${db_user}:${db_password}@nodecrash.wzhaeah.mongodb.net/`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    //? listen to requests
    app.listen("3000");
  })
  .catch((err) => console.log(err));

//? register view engine
app.set("view engine", "ejs");

//? middleware and static files
app.use(express.static("public"));
// takes url encoded data and passes into an object we can use on the request object
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  //? static
  //   res.sendFile("./views/index.html", { root: __dirname });
  //? dynamic
  res.redirect("/blogs");
});

//? separated into own 'blogRoutes' file in 'routes' folder
app.use("/blogs", blogRoutes);

//? separated into own 'aboutRoutes' file in 'routes' folder
app.use(aboutRoutes);

//? 404 page
app.use((req, res) => {
  //? static
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  //? dynamic
  res.status(404).render("404", { title: "404" });
});
