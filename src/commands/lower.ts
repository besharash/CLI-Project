import readline from 'readline';
import { Command } from './command';

export class LowerCommand implements Command {
    name = 'Lower';
    description = 'Check if all characters in the input are lowercase';
    execute(rl: readline.Interface, next: () => void) {
        rl.question('Enter a string to check for lowercase: ', (input) => {
             const isLowercase = input === input.toLowerCase();
             console.log(`Is Lowercase: ${isLowercase}`);
            next();
         });
     }
}
