import readline from 'readline';

export interface Command {
  name: string;
  description: string;
  execute(rl: readline.Interface, next: () => void): void;
}
