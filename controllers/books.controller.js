const uuid = require("uuid");

const model = require("../models/books.model");

async function getBooks(req, res) {
    const result = await model.findAll();
    res.json(result);
}

function getBook(req, res) {

}

function addBook(req, res) {

}

function changeBook(req, res) {

}

function manageBook(req, res) {

}

function deleteBook(req, res) {

}

module.exports = {
    getBooks,
    getBook,
    addBook,
    changeBook,
    manageBook,
    deleteBook
}