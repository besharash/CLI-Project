import readline from 'readline';
import { Command } from './command';

export class PalindromeCommand implements Command {
    name = 'Palindrome';
    description = 'Check if the input is a palindrome'
    execute(rl: readline.Interface, next: () => void) {
         rl.question('Enter a string to check for palindrome: ', (input) => {
         const isPalindrome = input === input.split('').reverse().join('');
         console.log(`Is Palindrome: ${isPalindrome}`);
         next();
    });
  }
}
