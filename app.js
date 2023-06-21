const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const db_password = process.env.DB_PASSWORD;

//? express app
const app = express();

//? connect to mongodb
const dbURI = `mongodb+srv://localhost:${db_password}@nodecrash.wzhaeah.mongodb.net/`;
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
  const blogs = [
    {
      title: "First blog",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Second blog",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Third blog",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  res.render("index", { title: "Home", blogs });
  console.log(req);
});
app.get("/about", (req, res) => {
  //? static
  //   res.sendFile("./views/about.html", { root: __dirname });
  //? dynamic
  res.render("about", { title: "About" });
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
