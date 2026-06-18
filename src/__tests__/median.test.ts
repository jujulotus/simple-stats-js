import { describe, expect, test } from "vitest";
import median from "../median.ts";

describe("median() returns the median value for an array of numbers", () => {
	test("returns null for empty array", () => {
		expect(median([])).toBeNull();
	});

	test("returns median of positive numbers", () => {
		expect(median([12, 9, 22, 35, 25, 53, 100, 152])).toBeCloseTo(30.0);
	});

	test("handle decimals", () => {
		expect(median([12.45, 9.23, 22.44])).toBe(12.45);
	});

	test("handles negative numbers", () => {
		expect(median([-12, -15, -30, -45, -11])).toBe(-15);
	});
});
