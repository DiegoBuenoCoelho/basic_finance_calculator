export type QuoteInput = {
	cost: number;
	profit: number;
	sellingPrice: number;
	term: BigInteger;
	rate: number;
	outOfPocket: number;
	taxRate: number;
	timestamp: string;
	raw?: any;
};
