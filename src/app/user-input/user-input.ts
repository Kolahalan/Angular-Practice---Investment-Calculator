import { Component, signal } from '@angular/core'; // Import 'signal'
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../models/investmentInput';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {

  // Convert properties to writable signals
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(0);
  enteredDuration = signal(0);

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      // Access signal values using .()
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    });
    console.log("Submitted!");
    console.log("Initial Investment:", this.enteredInitialInvestment());
    console.log("Annual Investment:", this.enteredAnnualInvestment());
    console.log("Expected Return:", this.enteredExpectedReturn());
    console.log("Duration:", this.enteredDuration());

    //Resetting signals
    this.enteredInitialInvestment.set(0); 
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(0);     
    this.enteredDuration.set(0);         
  }
}