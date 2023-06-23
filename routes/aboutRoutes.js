const express = require("express");

const router = express.Router();

router.get("/about", (req, res) => {
  //? static
  //   res.sendFile("./views/about.html", { root: __dirname });
  //? dynamic
  res.render("about", { title: "About" });
});

//? redirects
router.get("/about-me", (req, res) => {
  res.redirect("/about");
});

module.exports = router;
