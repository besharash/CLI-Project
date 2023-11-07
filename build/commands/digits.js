"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitsCommand = void 0;
class DigitsCommand {
    constructor() {
        this.name = 'Digits';
        this.description = 'Check if all characters in the input are digits';
    }
    execute(rl, next) {
        rl.question('Enter a string to check for digits: ', (input) => {
            const isDigits = /^\d+$/.test(input);
            console.log(`Is Digits: ${isDigits}`);
            next();
        });
    }
}
exports.DigitsCommand = DigitsCommand;
