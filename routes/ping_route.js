const express = require("express");
const route = express.Router();
const { make_ping } = require("../controller/ping_controller");

route.post("/ping", make_ping);

module.exports = route;
