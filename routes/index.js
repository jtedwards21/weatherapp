const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import Start from "../public/javascripts/components/start";
import React from "react";

var city="Shanghai";

/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<Start city={city} />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

module.exports = router;
