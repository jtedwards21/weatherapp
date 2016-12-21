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
  console.log(req.ips);
  var url = 'http://ipinfo.io/' + req.ips + '/json'
  var options = {url: url}
  var callback = function(err, response, body){ res.send(body);}
  request(options, callback);
});

router.get("/weather/:city", function(req, res) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + req.params.city + "&APPID=92ce1e2eee7c91cb43470cada0b7c4d8";
  
  var options = {url: url}
  var callback = function(err, response, body){ res.send(body);}
  request(options, callback);
});

module.exports = router;
