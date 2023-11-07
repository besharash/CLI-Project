"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmstrongCommand = void 0;
class ArmstrongCommand {
    constructor() {
        this.name = 'Armstrong';
        this.description = 'Check if the input is an Armstrong Number';
    }
    execute(rl, next) {
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
exports.ArmstrongCommand = ArmstrongCommand;
