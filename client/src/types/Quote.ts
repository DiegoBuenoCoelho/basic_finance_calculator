import { QuoteInput } from "./QuoteInput";
import { QuoteResult } from "./QuoteResult";

export type Quote = {
	inq_res_cost: number;
	inq_profit: number;
	inq_sellingPrice: number;
	inq_term: BigInteger;
	inq_rate: number;
	inq_outOfPocket: number;
	inq_taxRate: number;
	inq_timestamp: string;
	res_taxes: number;
	res_baseLoanAmount: number;
	res_interest: number;
	res_totalLoanAmount: BigInteger;
	res_monthlyPayment: number;
	res_outOfPocket: number;
	res_quotename: string;
};
