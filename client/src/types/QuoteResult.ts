export type QuoteResult = {
	taxes: number;
	baseLoanAmount: number;
	interest: number;
	totalLoanAmount: BigInteger;
	payment: number;
	outOfPocket: number;
	name: string;
};
