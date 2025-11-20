import { Application, Request, Response } from "express";

const apiQuote = (app: Application) => {
	app.get("/quotes", (req: Request, res: Response) => {
		res.json({ message: "Server saying Hi from Quotes Modules" });
	});
};

export default apiQuote;
