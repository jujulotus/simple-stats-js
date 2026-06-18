type OptionsT = {
	fixedTo: number;
};

const defaultOptions: OptionsT = {
	fixedTo: 2,
};

/**
 * Returns the median value of an array of numbers.
 * If the array is empty, null is returned instead.
 *
 * @param {Array<number>} numbers - Array of numbers
 * @param {Object} options - Function configuration options.
 * @param {number} options.fixedTo - Number of decimal places in the returned value.
 * @returns {number | null} - The median value, or null if the array is empty.
 *
 * @example
 * ```typescript
 * median([12.45, 9.23, 22.44]) // returns 12.45
 * ```
 */
export default function median(
	numbers: number[],
	options: OptionsT = defaultOptions,
): number | null {
	if (numbers.length === 0) {
		return null;
	}

	if (numbers.length === 1) {
		return numbers[0] ?? null;
	}

	const sortedArr = numbers.sort((a, b) => a - b);
	const middlePosition = Math.round(sortedArr.length / 2) - 1;

	if (sortedArr.length % 2 !== 0) {
		return Number(sortedArr[middlePosition]?.toFixed(options.fixedTo));
	} else {
		const [a, b] = [sortedArr[middlePosition], sortedArr[middlePosition + 1]];

		if (!a || !b) {
			return null;
		}

		return Number(((a + b) / 2).toFixed(options.fixedTo));
	}
}
