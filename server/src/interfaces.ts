export interface QuoteInput {
	cost: number;
	profit: number;
	sellingPrice: number;
	term: BigInteger;
	rate: number;
	outOfPocket: number;
	taxRate: number;
	timestamp: string;
	raw?: any;
}

export interface QuoteResult {
	taxes: number;
	baseLoanAmount: number;
	interest: number;
	totalLoanAmount: BigInteger;
	monthlyPayment: number;
	outOfPocket: number;
	name: string;
}

export interface QuoteComplete {
	quoteInput: QuoteInput;
	quoteResult: QuoteResult;
}
