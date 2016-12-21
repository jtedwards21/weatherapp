const express = require("express");
const router = express.Router();
const request = require("request");
import { renderToString } from "react-dom/server";
import Start from "../public/javascripts/components/start";
import React from "react";


/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<Start />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

router.get("/ip", function(req, res) {
  var url = 'http://ipinfo.io/json'

  var options = {url: url}
  var callback = function(err, response, body){ res.send(body);}
  request(options, callback);
});

module.exports = router;
