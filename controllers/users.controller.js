const userModel = require("../models/users.model");
const bookModel = require("../models/books.model");
const loanModel = require("../models/loans.model");

async function getUsers(_, res) {
    const result = await userModel.findAll();
    if (!result) {
        return res.status(400).json({ message: "Could not get the users" });
    }
    res.status(200).json({ message: "All users fetched successfully", result });
}

async function lendBook(req, res) {
    const userResult = await userModel.findOneUser(req.body.id_user); //json body request
    const userId = userResult.id;

    const bookId = req.body.id_book; //json body request
    if (!bookId) {
        return res.status(404).json({ message: `You must add ID to book` });
    }

    const result = await bookModel.findOne(bookId);
    if (!result) {
        return res.status(404).json({ message: `No book with ID ${bookId} was found` });
    }

    if (result.qty <= 0) {
        //Osäker på vilken kod som är bäst. 409 kändes relevent efter läst om den på https://www.httpstatuses.org/409
        return res.status(409).json({ message: `'${result.title}' not currently available, wait for it to be returned or borrow a different book` });
    }

    const addLoanResult = await loanModel.addLoan(bookId, userId);
    const qtyResult = await bookModel.manageOne(bookId, null, null, null, result.qty - 1);

    res.status(200).json({ message: "Loan is successful", loanId: addLoanResult.lastID });
}

async function returnBook(req, res) {
    const loanId = req.body.id;

    if (!loanId) {
        return res.status(400).json({ message: `ID required` });
    }

    const loans = await loanModel.getLoan(loanId);
    console.log(loans, " this is loans");

    const result = await loanModel.removeLoan(loanId);
    if (result.changes === 0) {
        return res.status(404).json({ message: `Loan with ID ${loanId} does not exist` });
    }
    const qtyResult = await bookModel.manageOne(loans[0].id_book, null, null, null, result.qty + 1);

    res.status(200).json({ message: "Return is successful" });
}

module.exports = {
    getUsers,
    lendBook,
    returnBook
}