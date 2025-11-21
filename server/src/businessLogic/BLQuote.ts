const BLQuote = () => {
	const calcQuote = (currentQuote: QuoteComplete) => {
		const calculatedQuote: QuoteComplete = {
			dsf: 20,
		};
		return { ...calculatedQuote, calculated: true };
	};

	return { calcQuote };
};

export default BLQuote;
