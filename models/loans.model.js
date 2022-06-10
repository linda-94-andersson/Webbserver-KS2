const db = require("../config/db");

function getLoans() {
    const sql = "SELECT * FROM loans";

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

function getLoan(id) {
    const sql = "SELECT * FROM loans WHERE id = ?";

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

function getUserLoans(id) {
    const sql = "SELECT books.* , loans.id AS id_loan FROM books INNER JOIN loans ON loans.id_user = ? WHERE books.id = loans.id_book";

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

function getBookLoan(id) {
    const sql = "SELECT * FROM loans WHERE id_book = ?";

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

function addLoan(id_book, id_user) {
    const sql = "INSERT INTO loans (id_book, id_user) VALUES (?,?)";

    return new Promise((resolve, reject) => {
        db.run(sql, [id_book, id_user], function (error) {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(this);
        })
    })
}

function removeLoan(id) {
    const sql = "DELETE FROM loans WHERE id = ?";

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
    getUserLoans,
    getLoans,
    getLoan,
    getBookLoan,
    addLoan,
    removeLoan
}