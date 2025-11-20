import express, { Request, Response } from "express";
import apiQuote from "./apiModules/apiQuote.ts";

// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 3000;

apiQuote(app);

// Start the Express server
app.listen(port, () => {
	console.log(`Our server is running at http://localhost:${port}`);
});
