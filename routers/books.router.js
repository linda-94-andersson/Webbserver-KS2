const express = require("express"); 
const morgan = require("morgan"); 

const booksRouter = express.Router(); 

const booksController = require("../controllers/books.controller"); 

booksRouter.use(morgan("dev")); 

booksRouter.get("/books"); 
booksRouter.get("/books/:id"); 
booksRouter.post("/books"); 
booksRouter.put("/books/:id"); 
booksRouter.patch("/books/:id"); 
booksRouter.delete("/books/:id"); 

module.exports = booksRouter; 