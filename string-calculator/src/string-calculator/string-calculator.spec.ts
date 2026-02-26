import {describe, it, expect} from "vitest";
import {add} from "./string-calculator"

describe("StringCalculator", () => {
    it("should return 0 for empty string", () => {
        expect(add("")).toBe(0);
    })

    it("should return number itself for string containing single number", ()=>{
        expect(add('1')).toBe(1)
        expect(add('2')).toBe(2)
        expect(add('3')).toBe(3)
        expect(add('21')).toBe(21)

    })

})