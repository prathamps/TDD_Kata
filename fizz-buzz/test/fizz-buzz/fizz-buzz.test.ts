import {describe, it, expect } from 'vitest'
import {fizzBuzz} from '../../src/fizz-buzz/fizz-buzz'
describe("fizzBuzz", ()=>{
    it("returns number as a string", ()=>{
        expect(fizzBuzz(1)).toBe("1")
        expect(fizzBuzz(2)).toBe("2")
        expect(fizzBuzz(4)).toBe("4")
    })

    it("returns 'fizz' for a number multiple of 3", ()=>{
        expect(fizzBuzz(3)).toBe("fizz")
        expect(fizzBuzz(6)).toBe("fizz")
        expect(fizzBuzz(9)).toBe("fizz")
    })


})