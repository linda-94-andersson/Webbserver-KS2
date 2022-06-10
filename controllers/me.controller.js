const loanModel = require("../models/loans.model");

async function getMe(req, res) {
    const loans = await loanModel.getUserLoans(req.user.id);
    if (!loans) {
        return res.status(400).json({ message: "No data available" });
    }

    res.status(200).json({ user: req.user, loans });
}

module.exports = {
    getMe,
} 