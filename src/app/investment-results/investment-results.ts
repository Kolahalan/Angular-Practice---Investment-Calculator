import { Component, computed, inject } from '@angular/core';
import { Results } from '../models/investmentInput';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  private investmentService = inject(InvestmentService);

//using a getter to get resultsData signal from service
// get results(){   
// return this.investmentService.resultsData;
//   }

//using a computedsignal to do that same
// results = computed(()=> this.investmentService.resultsData());

//using a Readonly signal to avoid accidentally updating the signal - Preferred
results = this.investmentService.resultsData.asReadonly();


//  constructor() {
//     // Use an effect to react to changes in the 'results' input signal
//     effect(() => {
//       const currentResults = this.results(); // Get the current value of the signal
//       console.log('InvestmentResults component received data:', currentResults);

//       if (currentResults && currentResults.length > 0) {
//         console.log('First result year:', currentResults[0].year);
//         // You can log more details if needed
//       } else {
//         console.log('Results are empty or undefined.');
//       }
//     });
  }
