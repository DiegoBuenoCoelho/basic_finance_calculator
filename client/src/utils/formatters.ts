export function formatDate({
	isoString,
	style = "medium",
}: {
	isoString: string | null;
	style: string | null;
}) {
	const locale = navigator.language;
	const mediumDateFormat = new Intl.DateTimeFormat(locale, { dateStyle: "medium" });
	const longDateFormat = new Intl.DateTimeFormat(locale, { dateStyle: "long" });
	if (isoString) {
		const date = new Date(isoString);
		return style === "long" ? longDateFormat.format(date) : mediumDateFormat.format(date);
	}
	return "";
}
