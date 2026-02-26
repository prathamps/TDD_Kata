import {describe, it, expect} from 'vitest'
import {isLeapYear} from "./leapYear";

describe("isLeapYear", () => {
    it("return false if the year is not divisible by  4", ()=> {
        expect(isLeapYear(2021)).toBe(false)
    })

    it("return true if the year is divisible by 4", ()=> {
        expect(isLeapYear(2024)).toBe(true)
    })

    it('return false if year is divisible by 100', ()=>{
        expect(isLeapYear(1900)).toBe(false)
    })

    it('return true if the year is divisible by 400', ()=>{
        expect(isLeapYear(1600)).toBe(true)
    })
})