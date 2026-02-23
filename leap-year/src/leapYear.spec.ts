import {describe, it, expect} from 'vitest'
import {isLeapYear} from "./leapYear";

describe("isLeapYear()", () => {
    it("return false if the year is not divisible by  4", ()=> {
        expect(isLeapYear(2021)).toBe(false)
    })

})