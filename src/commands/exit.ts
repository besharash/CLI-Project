import readline from 'readline';
import { Command } from './command';

export class ExitCommand implements Command {
    name = 'Exit';
    description = 'Exit the application';

    execute(rl: readline.Interface, next: () => void) {
       console.log('Exiting...');
       rl.close();
    }
} 