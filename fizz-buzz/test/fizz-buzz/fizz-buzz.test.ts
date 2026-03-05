import {describe, it, expect } from 'vitest'
import {fizzBuzz} from '../../src/fizz-buzz/fizz-buzz'
describe("fizzBuzz", ()=>{
    it("returns number as a string", ()=>{
        expect(fizzBuzz(1)).toBe("1")
        expect(fizzBuzz(2)).toBe("2")
        expect(fizzBuzz(4)).toBe("4")
    })
})