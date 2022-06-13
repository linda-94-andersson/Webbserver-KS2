const fs = require("fs");
const chalk = require("chalk"); //Must be v:4.0 to work with require
const dayjs = require("dayjs"); 

const getActualRequestDurationInMilliseconds = start => {
    const NS_PER_SEC = 1e9; //  convert to nanoseconds
    const NS_TO_MS = 1e6; // convert to milliseconds
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

function logger(req, res, next) {
    const formatted_date = dayjs().format("YYYY-MM-DD HH:mm:ss");

    const start = process.hrtime();
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);

    res.on("finish", () => {
        const method = req.method;
        const url = req.url;
        const status = res.statusCode;
        const log = `[${chalk.blue(formatted_date)}]
        ${method}:${url}(${chalk.green(status)})
        ${chalk.red(durationInMilliseconds.toLocaleString() + "ms")}`;
        console.log(log);
        fs.appendFile("request_logs.txt", log + "\n", err => {
            if (err) {
                console.log(err);
            }
        });
    })
    next();
}

module.exports = logger;
