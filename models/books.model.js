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

function findOne(id) {
    const sql = "SELECT * FROM books WHERE id = ?";

    return new Promise((resolve, reject) => {
        db.all(sql, id, (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(rows);
        })
    })
}

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
function changeOne(book) {
const sql = "";
}

//manage = PATCH
function manageOne() {

}

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