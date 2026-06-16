import { describe, expect, test } from "vitest";
import avg from "../avg.ts";

describe("avg() returns the average value for an array of numbers", () => {
	test("returns null for empty array", () => {
		expect(avg([])).toBeNull();
	});

	test("returns average of positive numbers", () => {
		expect(avg([2, 2])).toBe(2);
	});

	test("handles negative numbers", () => {
		expect(avg([-2, -4])).toBe(-3);
	});

	test("handles decimals", () => {
		expect(avg([0.1, 0.2])).toBeCloseTo(0.15);
	});

	test("handles decimal numbers", () => {
		expect(avg([1.5, 2.5])).toBe(2);
	});

	test("handles large numbers", () => {
		expect(avg([1000000, 2000000, 3000000])).toBe(2000000);
	});
});
