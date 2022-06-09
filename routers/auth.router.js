const express = require("express");
const morgan = require("morgan");

const authRouter = express.Router();

const authController = require("../controllers/auth.controller");

authRouter.use(morgan("dev"));

authRouter.post("/auth/register", authController.reg);
authRouter.post("/auth/login", authController.log);

module.exports = authRouter; 