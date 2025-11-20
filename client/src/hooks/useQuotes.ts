import { serverURL } from "@/config";
import { Quote } from "@/types/Quote";
import { useQuery } from "@tanstack/vue-query";
import axios, { AxiosResponse } from "axios";

const useQuote = () => {
	const endpoint = `${serverURL}/quotes`;

	// const getData = async (): Promise<AxiosResponse<Quote>> => {
	// 	const data = await axios.get(endpoint);
	// 	return data;
	// };

	// const { data, isLoading, error } = useQuery({
	// 	queryKey: ["getQuotes"],
	// 	queryFn: getData,
	// });

	const fetcher = async (): Promise<Quote> =>
		await fetch(endpoint).then((response) => response.json());

	const { isError, isFetching, isLoading, data, error } = useQuery({
		queryKey: ["getQuotes"],
		queryFn: () => fetcher(),
	});

	return { isError, isFetching, isLoading, data, error };
};

export default useQuote;
