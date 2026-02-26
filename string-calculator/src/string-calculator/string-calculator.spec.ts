import {describe, it, expect} from "vitest";
import {add} from "./string-calculator"

describe("StringCalculator", () => {
    it("should return 0 for empty string", () => {
        expect(add("")).toBe(0);
    })

    it("should return number itself for a single number string", ()=>{
        expect(add('1')).toBe(1)
        expect(add('2')).toBe(2)
        expect(add('3')).toBe(3)
        expect(add('21')).toBe(21)

    })

    it('should return sum of numbers for a comma separated number string', ()=>{
        expect(add('2,3')).toBe(5)
        expect(add('2,3,5')).toBe(10)
        expect(add('2,3,5,5,5')).toBe(20)

    })



})