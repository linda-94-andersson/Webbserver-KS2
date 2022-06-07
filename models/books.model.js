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

module.exports = {
    findAll,
}