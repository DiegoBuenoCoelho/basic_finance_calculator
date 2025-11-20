import { serverURL } from "@/config";
import { Quote } from "@/types/Quote";
import axios, { AxiosResponse } from "axios";

export const useQuotes = () => {
	const endpoint = `${serverURL}/quotes`;

	const getQuotes = async () => {
		const response = await axios.get(endpoint); //then((response) => (this.info = response));

		return response;
	};

	return {
		getQuotes,
	};
};
