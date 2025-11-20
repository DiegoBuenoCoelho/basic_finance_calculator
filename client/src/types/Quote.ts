import { QuoteInput } from "./QuoteInput";
import { QuoteResult } from "./QuoteResult";

export interface Quote {
	inq_cost: number;
	inq_profit: number;
	inq_sellingprice: number;
	inq_term: number;
	inq_rate: number;
	inq_outofpocket: number;
	inq_taxrate: number;
	inq_timestamp: string;
	res_taxes: number;
	res_baseloanamount: number;
	res_interest: number;
	res_totalloanamount: number;
	res_monthlypayment: number;
	res_outofpocket: number;
	res_quotename: string;
}
