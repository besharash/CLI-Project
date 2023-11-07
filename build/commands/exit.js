"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCommand = void 0;
class ExitCommand {
    constructor() {
        this.name = 'Exit';
        this.description = 'Exit the application';
    }
    execute(rl, next) {
        console.log('Exiting...');
        rl.close();
    }
}
exports.ExitCommand = ExitCommand;
