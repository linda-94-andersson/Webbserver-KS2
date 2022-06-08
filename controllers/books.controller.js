const uuid = require("uuid");

const model = require("../models/books.model");

async function getBooks(req, res) {
    const result = await model.findAll();
    if(!result){
        return res.status(404).send("Could not get the books"); 
    }
    res.status(200).json(result);
}

async function getBook(req, res) {
    const result = await model.findOne(req.params.id);
    if (!result) {
        return res.status(404).send("No ID found");
    }
    res.status(200).json(result);
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