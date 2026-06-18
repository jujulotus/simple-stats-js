type OptionsT = {
	fixedTo: number;
};

const defaultOptions: OptionsT = {
	fixedTo: 15,
};

/**
 * Returns the sum value of an array of numbers.
 * If the array is empty, null is returned instead.
 *
 * @param {Array<number>} numbers - Array of numbers
 * @param {Object} options - Function configuration options.
 * @param {number} options.fixedTo - Number of decimal places in the returned value if sum returns a float.
 * @returns {number | null} - The sum of an array of numbers, of null if the array is empty.
 *
 * @example
 * ```typescript
 * sum([10, 12, 32]) // returns 54
 * ```
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
