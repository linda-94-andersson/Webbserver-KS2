const express = require("express");
const morgan = require("morgan");

const usersRouter = express.Router();

const usersController = require("../controllers/users.controller");

usersRouter.use(morgan("dev"));

usersRouter.get("/users", usersController.getUsers);
usersRouter.get("/users/:id", usersController.getUser);
usersRouter.post("/users", usersController.addUser);
usersRouter.put("/users/:id", usersController.changeUser);
usersRouter.patch("/users/:id", usersController.manageUser);
usersRouter.delete("/users/:id", usersController.deleteUser);

module.exports = usersRouter; 