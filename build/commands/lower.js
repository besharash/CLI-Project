"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowerCommand = void 0;
class LowerCommand {
    constructor() {
        this.name = 'Lower';
        this.description = 'Check if all characters in the input are lowercase';
    }
    execute(rl, next) {
        rl.question('Enter a string to check for lowercase: ', (input) => {
            const isLowercase = input === input.toLowerCase();
            console.log(`Is Lowercase: ${isLowercase}`);
            next();
        });
    }
}
exports.LowerCommand = LowerCommand;
