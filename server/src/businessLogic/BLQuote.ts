import { QuoteComplete } from "../interfaces";

const BLQuote = () => {
	const calcQuote = (currentQuote: QuoteComplete) => {
		console.log("[calcQuote]", { currentQuote });

		const valueToTax = currentQuote.inq_sellingprice;
		const tax = currentQuote.inq_taxrate / 100;
		const amountTax = valueToTax * tax;
		const downpayment = currentQuote.inq_outofpocket;
		const principalWithTax = valueToTax + amountTax;
		const interestValue = principalWithTax * (currentQuote.inq_rate / 100);
		const totalLoanAmount = principalWithTax + interestValue - downpayment;
		const monthlyPayment = totalLoanAmount / currentQuote.inq_term;

		const calculatedQuote: QuoteComplete = {
			...currentQuote,
			res_taxes: amountTax,
			res_baseloanamount: principalWithTax,
			res_interest: interestValue,
			res_totalloanamount: totalLoanAmount,
			res_monthlypayment: monthlyPayment || 0,
			res_outofpocket: currentQuote.inq_outofpocket,
		};
		return { ...calculatedQuote };
	};

	return { calcQuote };
};

export default BLQuote;
