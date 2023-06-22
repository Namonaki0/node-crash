const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

require("dotenv").config();

const db_password = process.env.DB_PASSWORD;

//? express app
const app = express();

//? connect to mongodb
const dbURI = `mongodb+srv://Namonaki0:${db_password}@nodecrash.wzhaeah.mongodb.net/`;

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
app.use(morgan("dev"));

app.get("/", (req, res) => {
  //? static
  //   res.sendFile("./views/index.html", { root: __dirname });
  //? dynamic
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //? static
  //   res.sendFile("./views/about.html", { root: __dirname });
  //? dynamic
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "All blogs",
        blogs: result,
      });
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//? redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//? 404 page
app.use((req, res) => {
  //? static
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  //? dynamic
  res.status(404).render("404", { title: "404" });
});
