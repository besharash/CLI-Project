"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalindromeCommand = void 0;
class PalindromeCommand {
    constructor() {
        this.name = 'Palindrome';
        this.description = 'Check if the input is a palindrome';
    }
    execute(rl, next) {
        rl.question('Enter a string to check for palindrome: ', (input) => {
            const isPalindrome = input === input.split('').reverse().join('');
            console.log(`Is Palindrome: ${isPalindrome}`);
            next();
        });
    }
}
exports.PalindromeCommand = PalindromeCommand;
