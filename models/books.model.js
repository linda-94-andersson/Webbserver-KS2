const db = require("../config/db");

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

module.exports = {
    findAll,
    findOne,
}