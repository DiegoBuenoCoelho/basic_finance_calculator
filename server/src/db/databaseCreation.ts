import useConnection from "../";

const { connection } = useConnection();
const { schema } = connection;

await schema.dropTableIfExists("company");

await schema.createTable("company", (table) => {
	table.text("id").notNullable().primary();
	table.text("name").notNullable();
	table.text("description");
});

await connection.table("company").insert([
	{
		id: "FjcJCHJALA4i",
		name: "Facegle",
		description:
			"We are a startup on a mission to disrupt social search engines. Think Facebook meet Google.",
	},
	{
		id: "Gu7QW9LcnF5d",
		name: "Goobook",
		description:
			"We are a startup on a mission to disrupt search social media. Think Google meet Facebook.",
	},
]);

process.exit();
