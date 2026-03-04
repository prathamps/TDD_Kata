import {describe, it, expect} from "vitest"
import { validatePassword} from "../../src/password-validator-v1/passowrd-validator";

describe("validatePassword", () => {
    it("should return false for empty password", () => {
        expect(validatePassword("")).toBe(false)
    })

    it("should return false when password has less than or equal to 8 characters", () => {
        expect(validatePassword("password1")).toBe(false);
    });

    it("should return false when password does not contain a capital letter", () => {
        expect(validatePassword("password1")).toBe(false)
    })

    it("should return false when password does not contain a lowercase letter", () => {
        expect(validatePassword("PASSWORD1")).toBe(false)
    })
});