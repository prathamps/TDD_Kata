import {isLeapYear} from "./leap-year";

describe("isLeapYear", ()=>{

    it("should return false if the year is not divisble by 4",()=>{
        expect(isLeapYear(2021)).toBe(false);
    })
    it("should return true if the year is  divisble by 4",()=>{
        expect(isLeapYear(2004)).toBe(true);
    })
    it("should return true if year is divisble by 400",()=>{
        expect(isLeapYear(1600)).toBe(true)
    })
    it('should return false if year is divisble by 4 not by 100', () => {
       expect(isLeapYear(1900)).toBe(false)
    });

})
