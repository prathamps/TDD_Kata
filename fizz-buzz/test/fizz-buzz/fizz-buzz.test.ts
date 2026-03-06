import {describe, it, expect } from 'vitest'
import {fizzBuzz} from '../../src/fizz-buzz/fizz-buzz'
describe("fizzBuzz", ()=>{
    it.each([
        [1, "1"],
        [2, "2"],
        [4, "4"]
    ])("returns number %d as a string '%s'", (value, expected)=>{
        expect(fizzBuzz(value)).toBe(expected)
    })

    it.each([
        [3],
        [6],
        [9],
    ])("returns 'fizz' for a number %d multiple of 3 and not 5", (value,expected)=>{
        expect(fizzBuzz(value)).toBe("fizz")
    })

    it.each()("returns 'buzz' for a number %d multiple of 5 and not 3", () => {
        expect(fizzBuzz(5)).toBe("buzz")
        expect(fizzBuzz(10)).toBe("buzz")
        expect(fizzBuzz(20)).toBe("buzz")
    })

    it.each([
        [15,"fizzBuzz"],
        [30,"fizzBuzz"],
        [45,"fizzBuzz"]
    ])("returns 'palindrome' for a number %d multiple of both 3 and 5", (value,expected) => {
        expect(fizzBuzz(value)).toBe(expected);
    })
})