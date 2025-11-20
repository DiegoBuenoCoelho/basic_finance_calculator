export type QuoteResult = {
	taxes: number;
	baseLoanAmount: number;
	interest: number;
	totalLoanAmount: BigInteger;
	monthlyPayment: number;
	outOfPocket: number;
	name: string;
};
