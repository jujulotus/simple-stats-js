import { describe, expect, test } from "vitest";
import mode from "../mode.ts";

describe("mode() returns the mode value for an array of numbers", () => {
	test("returns null for empty array", () => {
		expect(mode([])).toBeNull();
	});

	test("returns mode of positive numbers", () => {
		expect(
			mode([
				10, 12, 12, 1, 1, 5, 5, 5, 6, 57, 57, 57, 57, 57, 57, 150, 123, 100,
				123, 123, 123, 123, 123, 123, 123, 51, 32, 45, 120, 120, 120, 100, 21,
				12, 45, 70, 12, 23, 123, 123, 130, 230, 5340, 1230, 41023, 12304, 1234,
				51009, 4951, 150000, 123456789, 57, 57, 57, 57,
			]),
		).toStrictEqual([57, 123]);
	});

	test("returns all numbers when they all appear the same amount of times", () => {
		expect(mode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		]);
	});

	test("returns single number when it appears the most", () => {
		expect(
			mode([12, 10, 567, 123, 401, 23, 123, 12, 12, 10, 1004, 123, 12]),
		).toBe(12);
	});

	test("handle negative numbers", () => {
		expect(mode([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, -10, 11])).toBe(-10);
	});

	test("handle when mode value is both an negative and positive number", () => {
		expect(
			mode([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, -10, 11, 11]),
		).toStrictEqual([11, -10]);
	});
});
