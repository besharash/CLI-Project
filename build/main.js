"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
class CLIApp {
    constructor() {
        // Create instances of the command classes
        this.commands = {
            '1': new (require('./commands/palindrome').PalindromeCommand)(),
            '2': new (require('./commands/lower').LowerCommand)(),
            '3': new (require('./commands/digits').DigitsCommand)(),
            '4': new (require('./commands/armstrong').ArmstrongCommand)(),
            '5': new (require('./commands/nationalize').NationalizeCommand)(),
            '6': new (require('./commands/exit').ExitCommand)(),
        };
    }
    showCommands() {
        console.log('Available commands:');
        for (const key in this.commands) {
            console.log(`${key}. ${this.commands[key].name} - ${this.commands[key].description}`);
        }
    }
    start() {
        const recursivePrompt = () => {
            this.showCommands();
            rl.question('Enter the command number: ', (commandNumber) => {
                if (this.commands[commandNumber]) {
                    if (commandNumber === '6') {
                        console.log('Exiting...');
                        rl.close();
                    }
                    else {
                        this.commands[commandNumber].execute(rl, () => {
                            recursivePrompt();
                        });
                    }
                }
                else {
                    console.log('Invalid command. Please choose a valid command number.');
                    recursivePrompt();
                }
            });
        };
        recursivePrompt();
    }
}
const app = new CLIApp();
app.start();
