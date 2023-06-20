const express = require("express");

//? express app
const app = express();

//? register view engine
app.set("view engine", "ejs");

//? listen to requests
app.listen("3000");

app.get("/", (req, res) => {
  //? static
  //   res.sendFile("./views/index.html", { root: __dirname });
  //? dynamic
  res.render("index");
});
app.get("/about", (req, res) => {
  //? static
  //   res.sendFile("./views/about.html", { root: __dirname });
  //? dynamic
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
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
  res.status(404).render("404");
});
