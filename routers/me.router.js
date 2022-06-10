const express = require("express");
const morgan = require("morgan");

const auth = require("../middlewares/auth");

const meRouter = express.Router();

const meController = require("../controllers/me.controller");

meRouter.use(morgan("dev"));

meRouter.get("/me", auth, meController.getMe);

module.exports = meRouter; 