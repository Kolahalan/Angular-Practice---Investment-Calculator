import { Component, effect, input } from '@angular/core';
import { Results } from '../models/investmentInput';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
results = input<Results[]| undefined>(undefined);
 constructor() {
    // Use an effect to react to changes in the 'results' input signal
    effect(() => {
      const currentResults = this.results(); // Get the current value of the signal
      console.log('InvestmentResults component received data:', currentResults);

      if (currentResults && currentResults.length > 0) {
        console.log('First result year:', currentResults[0].year);
        // You can log more details if needed
      } else {
        console.log('Results are empty or undefined.');
      }
    });
  }}
