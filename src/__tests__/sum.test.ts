import { describe, expect, test } from "vitest";
import sum from "../sum.ts";

describe("sum() returns the summed amount for an array of numbers", () => {
	test("returns null for empty array", () => {
		expect(sum([])).toBeNull();
	});

	test("returns sum of positive numbers", () => {
		expect(sum([2, 2, 2])).toBe(6);
	});

	test("returns sum of negative numbers", () => {
		expect(sum([-10, -12])).toBe(-22);
	});

	test("handles decimals", () => {
		expect(sum([0.1, 0.3])).toBeCloseTo(0.4);
	});
});
