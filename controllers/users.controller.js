const model = require("../models/users.model");

async function getUsers(req, res) {
    const result = await model.findAll();
    res.json(result);
}

function getUser(req, res) {

}

function addUser(req, res) {

}

function changeUser(req, res) {

}

function manageUser(req, res) {

}

function deleteUser(req, res) {

}

module.exports = {
    getUsers,
    getUser,
    addUser,
    changeUser,
    manageUser,
    deleteUser
}