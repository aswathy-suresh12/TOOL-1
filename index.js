const chalk = require("chalk");
const inquirer = require("inquirer");
const _ = require("lodash");
require("dotenv").config();
const { IgApiClient } = require("instagram-private-api");
console.log(chalk.green.bold(`
████████╗██╗  ██╗ █████╗ ██╗   ██╗██╗     ██╗██╗
╚══██╔══╝██║  ██║██╔══██╗██║   ██║██║     ██║██║
   ██║   ███████║███████║██║   ██║██║     ██║██║
   ██║   ██╔══██║██╔══██║██║   ██║██║     ██║██║
   ██║   ██║  ██║██║  ██║╚██████╔╝███████╗██║██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝╚═╝
              
  Ξ TITLE  : THAYOLI - Unfollow Not Followback
  Ξ UPDATE : 29 Jan 2026
  Ξ STATUS : TEST MODE
  = OWNER  : JARVISS4431
  = INSTA  :the.jz_
`));
async function loginWithCookies() {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_DS_USER_ID);
   await ig.state.deserializeCookieJar({
        cookies: [
            { key: "sessionid", value: process.env.IG_SESSIONID, domain: ".instagram.com", path: "/" },
            { key: "ds_user_id", value: process.env.IG_DS_USER_ID, domain: ".instagram.com", path: "/" },
            { key: "csrftoken", value: process.env.IG_CSRFTOKEN, domain: ".instagram.com", path: "/" },
            { key: "mid", value: process.env.IG_MID, domain: ".instagram.com", path: "/" },
        ],
    });

    const me = await ig.account.currentUser();
    console.log(chalk.green.bold(`✅ Logged in as @${me.username} (ID: ${me.pk})`));
    return ig;
}
const tools = [
    "➥ Unfollow Not Followback",
    "➥ Exit"
];
const menuQuestion = {
    type: "list",
    name: "choice",
    message: "Select tool:",
    choices: tools
};
async function main() {
    try {
        const ig = await loginWithCookies();
        const { choice } = await inquirer.prompt(menuQuestion);
        if (choice === tools[0]) {
            console.log(chalk.cyan("Starting Unfollow Not Followback..."));
        } else if (choice === tools[1]) {
            console.log(chalk.yellow("Exiting THAYOLI tool."));
            process.exit();
        }
    } catch (err) {
        console.log(chalk.red("Error:"), err.message || err);
    }
}
main();

