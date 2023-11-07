"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationalizeCommand = void 0;
const axios_1 = __importDefault(require("axios"));
// Import the country data
const countriesJson = __importStar(require("../data/countries.json"));
const countries = countriesJson;
class NationalizeCommand {
    constructor() {
        this.name = 'Nationalize';
        this.description = 'Check the nationality probability of a given first name';
    }
    execute(rl, next) {
        rl.question('Enter a first name to check nationality: ', (input) => {
            const apiUrl = `https://api.nationalize.io?name=${input}`;
            axios_1.default
                .get(apiUrl)
                .then((response) => {
                const data = response.data;
                if (data.country.length > 0) {
                    const mostProbable = data.country[0];
                    const countryISO = mostProbable.country_id;
                    const probability = mostProbable.probability * 100;
                    const countryName = countries[countryISO] || 'Unknown Country';
                    console.log(`${countryName} ${probability.toFixed(1)}%`);
                }
                else {
                    console.log('No nationality data found for this name.');
                }
                next();
            })
                .catch((error) => {
                console.error('Error:', error);
                next();
            });
        });
    }
}
exports.NationalizeCommand = NationalizeCommand;
