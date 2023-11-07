import readline from 'readline';
import axios, { AxiosResponse } from 'axios';
import { Command } from './command';

// Define a custom type for the country data
type CountriesData = { [key: string]: string };

// Import the country data
import * as countriesJson from '../data/countries.json';
const countries: CountriesData = countriesJson;

export class NationalizeCommand implements Command {
    name = 'Nationalize';
    description = 'Check the nationality probability of a given first name';
    execute(rl: readline.Interface, next: () => void) {
         rl.question('Enter a first name to check nationality: ', (input) => {
            const apiUrl = `https://api.nationalize.io?name=${input}`;

            axios
                .get(apiUrl)
                .then((response: AxiosResponse) => {
                const data = response.data;
                if (data.country.length > 0) {
                    const mostProbable = data.country[0];
                    const countryISO = mostProbable.country_id;
                    const probability = mostProbable.probability * 100;
                    const countryName = countries[countryISO] || 'Unknown Country';
                    console.log(`${countryName} ${probability.toFixed(1)}%`);
                } else {
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
