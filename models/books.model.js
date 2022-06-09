const db = require("../config/db");

/**
 * {
 * id: number,
 * title: string,
 * author: string,
 * genre: string,
 * lendout: boolean // setup later
 * }
 */

//find = GET
function findAll() {
    const sql = "SELECT * FROM books";

    return new Promise((resolve, reject) => {
        db.all(sql, (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(rows);
        })
    })
}

//find = GET/:id
function findOne(id) {
    const sql = "SELECT * FROM books WHERE id = ?";

    return new Promise((resolve, reject) => {
        db.get(sql, id, (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(rows);
        })
    })
}

//add = POST
function addOne(book) {
    const sql = "INSERT INTO books (title, author, genre) VALUES (?,?,?)";

    return new Promise((resolve, reject) => {
        db.run(sql, [book.title, book.author, book.genre], function (error) {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(this);
        })
    })
}

//change = PUT
function changeOne(id, title, author, genre) {
    const sql = "UPDATE books SET title = ?, author = ?, genre = ? WHERE id = ?";

    return new Promise((resolve, reject) => {
        db.run(sql, [title, author, genre, id], function (error) {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(this);
        })
    })
}

//manage = PATCH
function manageOne(id, title, author, genre) {
    const sql = "UPDATE books SET title = COALESCE(?, title), author = COALESCE(?, author), genre = COALESCE(?, genre) WHERE id = ?";

    return new Promise((resolve, reject) => {
        db.run(sql, [title, author, genre, id], function (error) {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(this);
        })
    })
}

//delete = DELETE
function deleteOne(id) {
    const sql = "DELETE FROM books WHERE id = ?";

    return new Promise((resolve, reject) => {
        db.run(sql, id, function (error) {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(this);
        })
    })
}

module.exports = {
    findAll,
    findOne,
    addOne,
    changeOne,
    manageOne,
    deleteOne
}