import { Application, Request, Response } from "express";
import { getQuotes } from "../db/quotes";

type QuoteInput = {
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

type QuoteResult = {
	taxes: number;
	baseLoanAmount: number;
	interest: number;
	totalLoanAmount: BigInteger;
	monthlyPayment: number;
	outOfPocket: number;
	name: string;
};

type QuoteResponse = {
	quoteInput: QuoteInput;
	quoteResult: QuoteResult;
};

const apiQuote = (app: Application) => {
	app.get("/quotes", async (req: Request, res: Response) => {
		// res.json({ message: "Server saying Hi from Quotes Modules" });
		const arQuotes = await getQuotes();
		console.log("AEEEEEEEEEE", { arQuotes });

		res.status(200).send({
			quotes: arQuotes,
		});
	});
};

export default apiQuote;
