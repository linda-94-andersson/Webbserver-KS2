const express = require("express");
const morgan = require("morgan");

const booksRouter = express.Router();

const booksController = require("../controllers/books.controller");

booksRouter.use(morgan("dev"));

booksRouter.get("/books", booksController.getBooks);
booksRouter.get("/books/:id", booksController.getBook);
booksRouter.post("/books", booksController.addBook);
booksRouter.put("/books/:id", booksController.changeBook);
booksRouter.patch("/books/:id", booksController.manageBook);
booksRouter.delete("/books/:id", booksController.deleteBook);

module.exports = booksRouter; 