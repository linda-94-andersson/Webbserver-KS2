const express = require("express");
const morgan = require("morgan");

const auth = require("../middlewares/auth");

const usersRouter = express.Router();

const usersController = require("../controllers/users.controller");

usersRouter.use(morgan("dev"));

usersRouter.get("/users", usersController.getUsers);
usersRouter.post("/users/lend", auth, usersController.lendBook);
usersRouter.post("/users/return", auth, usersController.returnBook);

module.exports = usersRouter; 