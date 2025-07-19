import { Component, Input, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentInput, Results } from './models/investmentInput';
import { InvestmentResults } from "./investment-results/investment-results";
@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'investment-calculator-practce-app';
  //resultsData = input<Results[]>([])
  resultsData = signal<Results[]>([]);
 calculateInvestmentResults(data:InvestmentInput) {
  const {initialInvestment,annualInvestment,duration,expectedReturn} = data;
  const annualData : Results[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }
this.resultsData.set(annualData) ;
}
}
