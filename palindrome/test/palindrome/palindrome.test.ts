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

    it("should true for 2 repeated characters", ()=>{
        expect(isPalindrome("aa")).toBe(true)
    })

    it("should return true for a palindrome word", ()=>{
        expect(isPalindrome("mayalayam")).toBe(true)
    })

    it("should return true for odd length palindrome word", ()=>{
        expect(isPalindrome("aba")).toBe(true)
    })

    it("should return true for even length palindrome word", ()=>{
        expect(isPalindrome("maam")).toBe(true)
    })

    it('should return true for palindrome word with different cases', ()=>{
        expect(isPalindrome("Maam")).toBe(true)
    })

    it("should return true for palindrome with spaces", ()=>{
        expect(isPalindrome("ma am")).toBe(true)
    })

    it("should return true for palindrome with punctuation marks", ()=>{  
    expect(isPalindrome("ma'a'm")).toBe(true)
})   

})