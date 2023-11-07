import readline from 'readline';
import { Command } from './command';

export class ArmstrongCommand implements Command {
  name = 'Armstrong';
  description = 'Check if the input is an Armstrong Number';

  execute(rl: readline.Interface, next: () => void) {
    rl.question('Enter a number to check for Armstrong Number: ', (input) => {
      const num = parseInt(input);
      const numString = num.toString();
      const numDigits = numString.length;
      let sum = 0;

      for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(numString[i]), numDigits);
      }

      const isArmstrong = num === sum;
      console.log(`Is Armstrong Number: ${isArmstrong}`);
      next();
    });
  }
}
