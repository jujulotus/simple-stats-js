type OptionsT = {
	fixedTo: number;
};

const defaultOptions: OptionsT = {
	fixedTo: 15,
};

/**
 * Returns the average value of an array of numbers.
 * If the array is empty, null is returned instead.
 *
 * @param {Array<number>} numbers - Array of numbers
 * @param {Object} options - Function configuration options.
 * @param {number} options.fixedTo - Number of decimal numbers in the returned value.
 * @returns {number | null} - The average value of an array of numbers, or null if the array is empty.
 *
 * @example
 * ```typescript
 * avg([20, 12, 10, 5], { fixedTo: 2 }); // Returns 11.75
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
