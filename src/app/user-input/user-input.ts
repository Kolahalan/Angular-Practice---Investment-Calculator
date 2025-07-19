import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { InvestmentInput } from '../models/investmentInput';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule], // FormsModule is correctly imported here for template-driven forms
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {

  enteredInitialInvestment: number = 0; 
  enteredAnnualInvestment: number = 0;
  enteredExpectedReturn: number = 0;
  enteredDuration: number = 0;

  calculate = output<InvestmentInput>(); 

  onSubmit() {
    console.log("Submitted!");
    console.log("Initial Investment:", this.enteredInitialInvestment);
    console.log("Annual Investment:", this.enteredAnnualInvestment);
    console.log("Expected Return:", this.enteredExpectedReturn);
    console.log("Duration:", this.enteredDuration);
    this.calculate.emit({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    });
  }
}
