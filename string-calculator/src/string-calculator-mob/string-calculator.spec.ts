import { describe, it, expect } from "vitest";
import { add, addImperative } from "./string-calculator";

// describe('StringCalculator', () => {
// it('Should return 0 for empty string', () => {
//     expect(add('')).toBe(0)
//     //expect(addImperative('')).toBe(0)

// })

// it('Should return the number itself when input is single input string', () => {
//     expect(add('1')).toBe(1)
//     //expect(addImperative('1')).toBe(1)
//     expect(add('3')).toBe(3) 
//     //expect(addImperative('3')).toBe(3)
//     expect(add('5')).toBe(5) 
//     //expect(addImperative('5')).toBe(5)
//     expect(add('21')).toBe(21)  
//     //expect(addImperative('21')).toBe(21)
// })

// it('Should return the sum of numbers for "," separated input string', () => {
//     expect(add('3,5')).toBe(8)
//     //expect(addImperative('3,5')).toBe(8)
// })
// })

describe('StringCalculator', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe(0)
        expect(add(' ')).toBe(0)
        //expect(addImperative('')).toBe(0)
    })

    it.each([
        {input: '1', expected: 1},
        {input: '3', expected: 3},
        {input: '21', expected: 21},
        {input: '3, 5', expected: 8},
        {input: '1,2,3,4,5,6,7,8,9', expected: 45},
        {input: '1\n2,3', expected: 6},
        {input: '//;\n1;2', expected: 3},
        {input: '//%\n1%2', expected: 3},
    ])('should return %i when input is %s', (input, expected) => {
        expect(add(input)).toBe(expected)

    });

    it('should return the sum of numbers for an input string with a single character custom delimiter', () => {
        expect(add('//;\n1;2')).toBe(3)
        expect(add('//%\n1%2')).toBe(3)
        expect(addImperative('//;\n1;2')).toBe(3)
    })

    it('should throw an error listing all negative numbers for an input string that has any negatives', () => {
        expect(() => add('1,-2,-3')).toThrowError(/negatives not allowed: -2 -3/)
        expect(() => addImperative('1,-2,-3')).toThrowError(/negatives not allowed: -2 -3/)
    })

    it('should return the sum of numbers for an input string by ignoring the numbers > 1000', () => {
        expect(add('1001,2')).toBe(2)
        expect(add('1001,2,1003,4')).toBe(6)
        //expect(addImperative('1001,2')).toBe(2)
        expect(add('1000,2')).toBe(1002)
        //expect(addImperative('1000,2')).toBe(1002)
    })

    it('should return the sum of numbers for an input string for arbitrary-length delimiter in brackets', () => {
        expect(add('//[***]\n1***2***3')).toBe(6)
        //expect(addImperative('//[***]\n1***2***3')).toBe(6)
    })

    it('should return the sum of numbers for an input string that has multiple single character delimiters', () => {
        expect(add('//[*][%]\n1*2%3')).toBe(6)
        //expect(addImperative('//[*][%]\n1*2%3')).toBe(6)
    })

    it('should return the sum of numbers for an input string that supports multiple long delimiters', () => {
        expect(add('//[foo][bar]\n1foo2bar3')).toBe(6)
        //expect(addImperative('//[foo][bar]\n1foo2bar3')).toBe(6)
    })
})





// Z - isLeapYear(0) -> return true
// O - isLeapYear(2024) -> return true
// M - isLeapYear(2021), isLeapYear(2016)



