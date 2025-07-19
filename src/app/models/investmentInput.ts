export interface InvestmentInput {
  duration: number;
  initialInvestment: number; 
  annualInvestment: number ;
  expectedReturn: number;
}

export interface Results {
  year: number;
  valueEndOfYear: number;
  interest: number;
  annualInvestment:number;
  totalInterest: number;
  totalAmountInvested: number;
}

