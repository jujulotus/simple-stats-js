type OptionsT = {
	fixedTo: number;
};

const defaultOptions: OptionsT = {
	fixedTo: 15,
};

/**
 * Returns the sum of an array of numbers.
 * If array is empty, null is returned instead.
 * @param numbers - array of numbers
 */
export default function sum(
	numbers: number[],
	options: OptionsT = defaultOptions,
): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const res = numbers.reduce((acc, cv) => Number(acc) + Number(cv), 0);

	return Number(res.toFixed(options.fixedTo));
}
