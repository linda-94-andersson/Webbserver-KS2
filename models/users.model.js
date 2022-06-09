const db = require("../config/db");

function findAll() {
    const sql = "SELECT * FROM users";

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

function findEmail(email) {
    const sql = "SELECT * FROM users WHERE email = ?";

    return new Promise((resolve, reject) => {
        db.get(sql, email, (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(rows);
        })
    })
}

function addOne(user) {
    const sql = "INSERT INTO users (username, email, password) VALUES (?,?,?)";

    return new Promise((resolve, reject) => {
        db.run(sql, [user.username, user.email, user.password], (error) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve();
        })
    })
}

module.exports = {
    findAll,
    findEmail,
    addOne
}