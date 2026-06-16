type OptionsT = {
	fixedTo: number;
};

const defaultOptions: OptionsT = {
	fixedTo: 15,
};

/**
 * Calculates the average value of an array of numbers.
 * If array is empty, null is returned instead.
 * @param numbers[] array of numbers
 * @param {Object} options
 * @param {number} options.fixedTo - Amount of decimal numbers to be returned.
 * @returns number | null
 *
 * @example
 * ```typescript
 * const res = avg([20, 12, 10, 5], { fixedTo: 2 }); // Returns 11.75
 * ```
 */
export default function avg(
	numbers: number[],
	options: OptionsT = defaultOptions,
): number | null {
	if (numbers.length === 0) {
		return null;
	}

	const res =
		numbers.reduce((acc, cv) => Number(acc) + Number(cv), 0) / numbers.length;

	return Number(res.toFixed(options.fixedTo));
}
