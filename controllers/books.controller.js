const model = require("../models/books.model");

//GET
async function getBooks(_, res) {
    const result = await model.findAll();
    if (!result) {
        return res.status(400).json({ message: "Could not get the books" });
    }
    if (result.length === 0) {
        return res.status(200).json({ message: "There are no books in the library" });
    }
    res.status(200).json({ message: "All books fetched successfully", result });
}

//GET/:id
async function getBook(req, res) {
    const { id } = req.params;
    const result = await model.findOne(id);
    if (!result) {
        return res.status(404).json({ message: `No book witth ID ${id} found` });
    }
    res.status(200).json({ message: `Feth book with ID ${id} successfully`, result });
}

//POST
async function addBook(req, res) {
    const { title, author, genre, qty } = req.body;

    if (!title || !author || !genre || !qty) {
        return res.status(400).json({ message: "All data must be send with the request" });
    }
    const existingBook = await model.getTitle(title);
    if (existingBook) {
        res.status(409).json({ message: "Book already exist" });
    }
    const newBook = {
        title,
        author,
        genre,
        qty
    };
    try {
        const result = await model.addOne(newBook);

        res.status(201).json({ message: "Book added successfully", id: result.lastID, ...newBook });
    } catch (error) {
        return res.status(400).json({ message: "Book could not be created" });
    }
}

//PUT
async function changeBook(req, res) {
    if (!req.body.title || !req.body.author || !req.body.genre || !req.body.qty) {
        return res.status(400).json({ message: "All data must be send with the request" });
    }
    await model.changeOne(req.params.id, req.body.title, req.body.author, req.body.genre, req.body.qty);
    const { id } = req.params;
    const result = await model.findOne(id);
    if (!result) {
        return res.status(404).json({ message: `Book with ID ${id} not found` });
    }
    res.status(200).json({ message: "Book succesfully changed", updated: req.body });
}

//PATCH
async function manageBook(req, res) {
    if (!req.body.title && !req.body.author && !req.body.genre && !req.body.qty) {
        return res.status(400).json({ message: "Data must be send with the request" });
    }
    await model.manageOne(req.params.id, req.body.title, req.body.author, req.body.genre, req.body.qty);
    const { id } = req.params;
    const result = await model.findOne(id);
    if (!result) {
        return res.status(404).json({ message: `Book with ID ${id} not found` });
    }
    res.status(200).json({ info: "Book succesfully managed", updated: req.body });
}

//DELETE
async function deleteBook(req, res) {
    const { id } = req.params;
    const result = await model.deleteOne(id);
    if (result.changes === 0) {
        return res.status(404).json({ message: `Book with ID ${id} does not exist` });
    }
    res.status(200).json({ message: `Book with ID ${id} deleted successfully` });
}

module.exports = {
    getBooks,
    getBook,
    addBook,
    changeBook,
    manageBook,
    deleteBook
}