import { describe ,it, expect } from "vitest";
import { isLeapYear } from "../../src/leap-year-v2/leap-year";

describe('isLeapYear', () => {
        it('should return false when the year is not divisible for 4', () => {
            expect(isLeapYear(2023)).toBe(false);
        })

        it.each([2024, 2020, 2028])('should return true when the year is divisible by 4', (year) => {
            expect(isLeapYear(year)).toBe(true);
        })

        it.each([1500, 1800, 2100])('should return false when the year is divisible by 100', (year)=>{
            expect(isLeapYear(year)).toBe(false)
        })

        it.each([1600, 2000, 2400])(
            "should return true when the year is divisible by 400",
            (year) => {
                expect(isLeapYear(year)).toBe(true);
            }
        );
    }
)

