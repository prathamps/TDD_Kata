import {describe, it, expect } from 'vitest'
import { isPalindrome } from "../../src/palindrome/palindrome";

describe("isPalindrome", ()=>{
    it('should return true when input string is empty', ()=>{
        expect(isPalindrome('  ')).toBe(true)
    })

    it('should return true for one single character string', ()=>{
        expect(isPalindrome("z")).toBe(true)
})

  it('should return false for 2 different characters', ()=>{
        expect(isPalindrome("va")).toBe(false)
})


})        