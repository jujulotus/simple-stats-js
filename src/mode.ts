/**
 * Return the mode value of an array of numbers.
 * If array is empty, null is returned instead.
 *
 * @param {Array<number>} numbers - Array of numbers.
 * @returns {number | Array<number> | null}
 */

export default function mode(numbers: number[]): number | number[] | null {
	if (numbers.length === 0) {
		return null;
	}

	if (numbers.length === 0) {
		return numbers[0] ?? null;
	}

	let max: number = 0,
		num: number = 0;

	numbers.reduce((acc: { [key: number]: number }, cv: number) => {
		acc[cv] = (acc[cv] || 0) + 1;

		if (acc[cv] > max) {
			max = acc[cv];
			num = Number(cv);
		}
		return acc;
	}, {});

	return num;
}
