import { Application, Request, Response } from "express";
import { getQuotes, createQuote, deleteQuote } from "../db/quotes";

const apiQuote = (app: Application) => {
	app.get("/quotes", async (req: Request, res: Response) => {
		// res.json({ message: "Server saying Hi from Quotes Modules" });
		const arQuotes = await getQuotes();
		console.log("AEEEEEEEEEE", { arQuotes });

		res.status(200).send({
			quotes: arQuotes,
		});
	});

	app.put("/quote", async (req: Request, res: Response) => {
		const { data } = req.body;
		const newQuote: QuoteComplete = data;
		// console.log("PUT with TS", { newQuote });

		const finalQuote = await createQuote(newQuote);

		res.status(200).send({
			...finalQuote,
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
};

export default apiQuote;
