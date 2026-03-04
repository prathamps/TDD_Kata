import { describe, it, expect } from "vitest"
import { validatePassword } from "../../src/password-validator-v1/passowrd-validator"

describe("validatePassword", () => {

    it.each([
        "",
    ])("should return false for empty password", (password) => {
        expect(validatePassword(password)).toBe(false)
    })

    it.each([
        "Passord",
        "abcd",
        "12cd"
    ])("should return false when password '%s' has less than or equal to 8 characters", (password) => {
        expect(validatePassword(password)).toBe(false)
    })

    it.each([
        "password1",
        "mypassword",
        "helloworld"
    ])("should return false when password '%s' does not contain a capital letter", (password) => {
        expect(validatePassword(password)).toBe(false)
    })

    it.each([
        "PASSWORD1",
        "HELLO1234",
        "WORLDTEST94"
    ])("should return false when password '%s'does not contain a lowercase letter", (password) => {
        expect(validatePassword(password)).toBe(false)
    })

    it.each([
        "Password_",
        "HelloWorld_",
        "MySecret_"
    ])("should return false when password '%s' does not contain a number", (password) => {
        expect(validatePassword(password)).toBe(false)
    })

    it.each([
        "Password1",
        "HelloWorld123",
        "WORLDTEST94"
    ])("should return false when password '%s' does not contain an underscore", (password) => {
        expect(validatePassword(password)).toBe(false)
    })

})