import {describe, it, expect} from "vitest"
import { validatePassword} from "../../src/password-validator-v1/passowrd-validator";

describe("validatePassword", () => {
    it("should return false for empty password", () => {
        expect(validatePassword("")).toBe(false)
    })

    it("should return true when password has more than 8 characters", () => {
        expect(validatePassword("password1")).toBe(true);
    });


});