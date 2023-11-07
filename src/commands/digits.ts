import readline from 'readline';
import { Command } from './command';

export class DigitsCommand implements Command {
  name = 'Digits';
  description = 'Check if all characters in the input are digits';

  execute(rl: readline.Interface, next: () => void) {
    rl.question('Enter a string to check for digits: ', (input) => {
      const isDigits = /^\d+$/.test(input);
      console.log(`Is Digits: ${isDigits}`);
      next();
    });
  }
}
