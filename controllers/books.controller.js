const model = require("../models/books.model");

async function getBooks(req, res) {
    const result = await model.findAll();
    if (!result) {
        return res.status(404).json({ message: "Could not get the books" });
    }
    res.status(200).json(result);
}

async function getBook(req, res) {
    const result = await model.findOne(req.params.id);
    if (!result) {
        return res.status(404).json({ message: "No ID found" });
    }
    res.status(200).json(result);
}

async function addBook(req, res) {
    const { title, author, genre } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).json({ message: "All data must be send with the request" });
    }
    const newBook = {
        title,
        author,
        genre
    };
    try {
        const result = await model.addOne(newBook);

        res.status(201).json({ id: result.lastID, ...newBook });
    } catch (error) {
        return res.status(400).json({ message: "Book already exist" });
    }
}

function changeBook(req, res) {

}

function manageBook(req, res) {

}

async function deleteBook(req, res) {
    const result = await model.deleteOne(req.params.id);
    if (result.changes === 0) {
        return res.status(404).json({ message: "Book with this ID do not exist" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
}

module.exports = {
    getBooks,
    getBook,
    addBook,
    changeBook,
    manageBook,
    deleteBook
}