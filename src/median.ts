/**
 * Returns the median of an array of number.
 * If array is empty, null is returned instead.
 * @param numbers - array of numbers
 * @returns number | null
 */
export default function median(numbers: number[]) {
	if (numbers.length === 0) {
		return null;
	}

	if (numbers.length === 1) {
		return numbers[0];
	}

	const sortedArr = numbers.sort((a, b) => a - b);
	const middlePosition = Math.round(sortedArr.length / 2) - 1;

	if (sortedArr.length % 2 !== 0) {
		return sortedArr[middlePosition];
	} else {
		const [a, b] = [sortedArr[middlePosition], sortedArr[middlePosition + 1]];

		if (!a || !b) {
			return null;
		}

		return (a + b) / 2;
	}
}
