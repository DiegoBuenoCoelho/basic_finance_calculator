import useConnection from "./useConnection";
import useGenerateIds from "../utils/useGenerateIds";
import { QuoteComplete } from "../interfaces";

const { connection } = useConnection();
const getQuoteTable = () => connection.table("quote");
const obGenerateId = useGenerateIds();

export const getCountQuotes = async (): Promise<number> => {
	const row: any = await getQuoteTable().count("* as quantity").first();
	const quantity =
		typeof row?.quantity === "string" ? parseInt(row.quantity, 10) : Number(row?.quantity ?? 0);
	return quantity;
};

export async function getQuotes(limit: number | bigint | null, offset: number | bigint | null) {
	// console.log("[getQuotes] ", { limit, offset });
	const query = getQuoteTable().select().orderBy("inq_timestamp", "desc");
	if (limit != null) {
		query.limit(Number(limit));
	}
	if (offset != null) {
		query.offset(Number(offset));
	}
	const quotes = await query;

	return quotes;
}

export async function getQuoteById(id: number | bigint | null) {
	return await getQuoteTable().first().where({ id });
}

export async function createQuote(newQuote: QuoteComplete) {
	const newId = obGenerateId.generateId();
	// console.log("[createQuote] ==>", { newId, newQuote });
	const finalQuote = {
		...newQuote,
		id: newId,
		inq_timestamp: new Date().toISOString(),
	};
	console.log({ finalQuote });
	await getQuoteTable().insert(finalQuote);
	return finalQuote;
}

export async function deleteQuote(quoteId: number | bigint | null) {
	const quote = await getQuoteTable().first().where({ id: quoteId });
	if (!quoteId) {
		throw new Error(`Quote not found by Id: ${quoteId}`);
	}
	await getQuoteTable().delete().where({ id: quoteId });
	return quote;
}

export async function updateQuote(theQuote: QuoteComplete) {
	const quote = await getQuoteTable().first().where({ id: theQuote.id });
	if (!quote) {
		throw new Error(`Quote not found by Id: ${theQuote.id}`);
	}
	await getQuoteTable().update(theQuote).where({ id: theQuote.id });
	return { ...theQuote };
}
