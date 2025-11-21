import { Application, Request, Response } from "express";
import { getQuotes, createQuote, deleteQuote, updateQuote } from "../db/quotes";
import BLQuote from "../businessLogic/BLQuote";
import { QuoteComplete } from "../interfaces";

const apiQuote = (app: Application) => {
	app.get("/quotes", async (req: Request, res: Response) => {
		// res.json({ message: "Server saying Hi from Quotes Modules" });
		const arQuotes = await getQuotes(null, null);
		console.log("AEEEEEEEEEE", { arQuotes });

		res.status(200).send({
			quotes: arQuotes,
		});
	});

	app.post("/quote", async (req: Request, res: Response) => {
		const { data } = req.body;
		const newQuote: QuoteComplete = data;
		// console.log("POST with TS", { newQuote });

		const finalQuote = await createQuote(newQuote);

		res.status(200).send({
			...finalQuote,
		});
	});

	app.put("/quote", async (req: Request, res: Response) => {
		const { data } = req.body;
		const updatedQuote: QuoteComplete = data;
		console.log("PUT with TS", { updatedQuote });

		// const finalQuote = await updateQuote(updatedQuote);

		res.status(200).send({
			...updatedQuote,
		});
	});

	app.delete("/quote", async (req: Request, res: Response) => {
		const { id } = req.body;
		console.log("DELETE with TS", { id });

		const deletedQuote = await deleteQuote(id);

		res.status(200).send({
			...deletedQuote,
		});
	});

	//---------------------------------

	app.post("/quoteCalc", async (req: Request, res: Response) => {
		const { data } = req.body;
		const currentQuote: QuoteComplete = data;

		const quoteCalculated = BLQuote().calcQuote(currentQuote);
		console.log("CALC with TS", { quoteCalculated });

		res.status(200).send({
			...quoteCalculated,
		});
	});
};

export default apiQuote;
