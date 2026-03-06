import {describe, it, expect } from 'vitest'
import { isPalindrome } from "../../src/palindrome/palindrome";

describe("isPalindrome", ()=>{
    it('should return true when input string is empty', ()=>{
        expect(isPalindrome('')).toBe(true)
    })
})