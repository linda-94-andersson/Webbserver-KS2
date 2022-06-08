const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");

const booksStmt = `
CREATE TABLE IF NOT EXISTS books 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE,
    author TEXT,
    genre TEXT
)
`;

const usersStmt = `
CREATE TABLE IF NOT EXISTS users 
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
            console.error(error.message);
            throw error;
        }
        const insert = "INSERT INTO books (title, author, genre) VALUES (?, ?, ?)"
        db.run(insert, ["Surprised by sin: the reader in Paradise lost.", "Fish, Stanley Eugene", "History and criticism"], (error) => {
            if (error) {
                console.error(error);
            }
        })
    });

    db.run(usersStmt, (error) => {
        if (error) {
            console.error(error.message);
            throw error;
        }
        const insert = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
        db.run(insert, ["ryandahl", "ryan@dahl.dk", md5("Macke123")], (error) => {
            if (error) {
                console.error(error);
            }
        })
    });
});



module.exports = db; 