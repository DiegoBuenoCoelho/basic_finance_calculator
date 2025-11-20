import useConnection from "./useConnection.ts";

const { connection } = useConnection();
const { schema } = connection;

await schema.dropTableIfExists("quote");

await schema.createTable("quote", (table) => {
	table.text("id").notNullable().primary();

	table.float("inq_cost").notNullable();
	table.float("inq_profit").notNullable();
	table.float("inq_sellingprice").notNullable();
	table.integer("inq_term").notNullable();
	table.float("inq_rate").notNullable();
	table.float("inq_outofpocket").notNullable();
	table.float("inq_taxrate").notNullable();
	table.text("inq_timestamp").notNullable();

	table.text("res_taxes");
	table.float("res_baseloanamount");
	table.float("res_interest");
	table.float("res_totalloanamount");
	table.float("res_monthlypayment");
	table.float("res_outofpocket");

	table.text("res_quotename").notNullable();
});

await connection.table("quote").insert([
	{
		id: "FjcJCHJALA4i",
		inq_cost: 2500.62,
		inq_profit: 1000,
		inq_sellingprice: 800.55,
		inq_term: 36,
		inq_rate: 2.27,
		inq_outofpocket: 600.49,
		inq_taxrate: 2.5,
		inq_timestamp: "2025-11-20T11:00:00.000Z",

		res_taxes: 2130.6,
		res_baseloanamount: 30505.45,
		res_interest: 1750.87,
		res_totalloanamount: 30277.3,
		res_monthlypayment: 680.21,
		res_outofpocket: 600.49,

		res_quotename: "Mr Smith - Ford Fusion 2010",
	},
	{
		id: "Gu7QW9LcnF5d",

		inq_cost: 2500.62,
		inq_profit: 1000,
		inq_sellingprice: 800.55,
		inq_term: 36,
		inq_rate: 2.27,
		inq_outofpocket: 600.49,
		inq_taxrate: 2.5,
		inq_timestamp: "2025-11-20T11:02:00.000Z",

		res_taxes: 2130.6,
		res_baseloanamount: 30505.45,
		res_interest: 1750.87,
		res_totalloanamount: 30277.3,
		res_monthlypayment: 680.21,
		res_outofpocket: 600.49,

		res_quotename: "Mr Adams - Chevrolet Silverado 2025",
	},
]);

process.exit();
