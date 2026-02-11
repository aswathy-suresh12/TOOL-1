const chalk = require("chalk");
const inquirer = require("inquirer");
const _ = require("lodash");
const fs = require("fs");
class instagram {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const print = (msg, type, line) => {
    if (!type) console.log(msg);
    if (type === "ok") console.log(chalk.green(`${line ? "\n" : ""}⊙ ${msg}`));
    if (type === "wait") console.log(chalk.cyan.bold(`${line ? "\n" : ""}∞ ${msg}`));
    if (type === "warn") console.log(chalk.yellow(`${line ? "\n" : ""}≉ ${msg}`));
    if (type === "err") console.log(chalk.red(`${line ? "\n" : ""}⋈ ${msg}`));
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = { chalk, inquirer, _, fs, instagram, print, delay };
