const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");

const booksStmt = `
CREATE TABLE books 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE,
    author TEXT,
    genre TEXT
)
`;

const usersStmt = `
CREATE TABLE users 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT UNIQUE,
    password TEXT
  )
`;

const db = new sqlite3.Database("../db.sqlite", (error) => {
    if (error) {
        console.error(error.message);
        throw error;
    }
    db.run(booksStmt, (error) => {
        if (error) {
            // console.error(error.message);
        } else {
            const insert = "INSERT INTO books (title, author, genre) VALUES (?, ?, ?)"
            db.run(insert, ["Surprised by sin: the reader in Paradise lost.", "Fish, Stanley Eugene", "History and criticism"])
        }
    })

    db.run(usersStmt, (error) => {
        if (error) {
            // console.error(error.message);
            //throw error;
        } else {
            const insert = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
            db.run(insert, ["ryandahl", "ryan@dahl.dk", md5("Macke123")])
        }
    }) 
});



module.exports = db; 