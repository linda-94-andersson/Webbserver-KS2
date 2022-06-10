const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");

const booksStmt = `
CREATE TABLE IF NOT EXISTS books 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE,
    author TEXT,
    genre TEXT,
    qty INTEGER
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

const loanStmt = `
CREATE TABLE IF NOT EXISTS loans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_book INTEGER,
    id_user INTEGER,
    timestamp INTEGER NOT NULL DEFAULT (unixepoch()),
    CONSTRAINT fk_id_book
        FOREIGN KEY(id_book) 
        REFERENCES books(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_id_user
        FOREIGN KEY(id_user)
        REFERENCES users(id)
        ON DELETE CASCADE
)
`;

const db = new sqlite3.Database("./db.sqlite", (error) => {
    if (error) {
        console.error(error.message);
        throw error;
    }
    db.run(booksStmt, (error) => {
        if (error) {
            console.error(error.message);
            throw error;
        }
        const insert = "INSERT INTO books (title, author, genre, qty) VALUES (?, ?, ?, ?)"
        db.run(insert, ["Surprised by sin: the reader in Paradise lost.", "Fish, Stanley Eugene", "History and criticism", "5"], (error) => {
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

    db.run(loanStmt, (error) => {
        if (error) {
            console.error(error.message);
            throw error;
        }
        //Jag skippar exempel på lån för att det förstör nedräkingen av antal böcker men har använts under utvecklingen
        // const insert = "INSERT INTO loans (id_book, id_user) VALUES (?,?)"
        // db.run(insert, [1, 1], (error) => {
        //     if (error) {
        //         console.error(error);
        //     }
        // })
    })
});

module.exports = db; 