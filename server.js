const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const booksRouter = require("./routers/books.router");
const usersRouter = require("./routers/users.router");
const authRouter = require("./routers/auth.router");
const meRouter = require("./routers/me.router");

const logger = require("./middlewares/logger");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(logger);

app.use(booksRouter);
app.use(usersRouter);
app.use(authRouter);
app.use(meRouter);


app.all('*', (req, res) =>
    res.status(404).json({ error: `Route '${req.url}' does not exist` })
);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
    console.log(`The server runs now at ${PORT}`);
}); 