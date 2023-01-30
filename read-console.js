import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const answer = await rl.question("What do you think of programming? ");

console.log(`yes we think the same. Programming is ${answer} indeed!`);

rl.close();
