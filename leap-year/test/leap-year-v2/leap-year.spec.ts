import { describe ,it, expect } from "vitest";
import { isLeapYear } from "../../src/leap-year-v2/leap-year";

describe('isLeapYear', () => {
        it('should return false when the year is not divisible for 4', () => {
            expect(isLeapYear(2023)).toBe(false);
        })

        it.each([2024, 2020, 2028])('should return true when the year is divisible by 4', (year) => {
            expect(isLeapYear(year)).toBe(true);
        })   //one



    }
)

