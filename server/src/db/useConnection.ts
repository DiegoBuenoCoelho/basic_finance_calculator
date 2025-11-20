import knex from "knex";

const useConnection = () => {
	const connection = knex({
		client: "better-sqlite3",
		connection: {
			filename: "./data/db.sqlite3",
		},
		useNullAsDefault: true,
	});

	connection.on(
		"query",
		({ sql, bindings }: { sql: string; bindings?: any[] | Record<string, any> }) => {
			// console.warn("[db]: ", data?.sql);
			// if (data?.bindings) console.warn("[db bindings]: ", data?.bindings);
			const query = connection.raw(sql, bindings as any).toQuery();
			console.warn("[db]", query);
		}
	);

	return {
		connection,
	};
};

export default useConnection;
