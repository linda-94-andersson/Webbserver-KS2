require("dotenv").config();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const model = require("../models/users.model");


async function reg(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All data must be send with the request" });
    }

    const existingUser = await model.findOne(email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exist" });
    }

    const newUser = {
        username,
        email,
        password: md5(password),
    };

    await model.addOne(newUser);

    res.status(201).json(newUser);
}

async function log(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "There must be an email and a password" });
    }

    const existingUser = await model.findOne(email);
    if (!existingUser) {
        return res.status(404).json({ message: "User does not exist" });
    }

    const hashedPassword = md5(password);
    if (existingUser.password !== hashedPassword) {
        return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
        {
            id: existingUser.id,
            username: existingUser.username,
            email: existingUser.email,
        },
        process.env.SECRET_KEY
    );

    res.status(200).json(token);
}


module.exports = {
    reg,
    log
}