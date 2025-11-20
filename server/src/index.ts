import express, { Request, Response } from "express";
import apiQuote from "./apiModules/apiQuote.ts";
import cors from "cors";

// Create a new express application instance
const app = express();

//Set Cors 
app.use(cors({
	origin: '*', // Allow requests from your Vue.js app
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
	credentials: true // Allow cookies and credentials
}));
app.use(express.json());

// Set the network port
const port = process.env.PORT || 3000;

apiQuote(app);

// Start the Express server
app.listen(port, () => {
	console.log(`Our server is running at http://localhost:${port}`);
});
