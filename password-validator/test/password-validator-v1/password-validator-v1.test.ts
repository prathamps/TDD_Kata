import {describe, it, expect} from "vitest"
import { validatePassword} from "../../src/password-validator-v1/passowrd-validator";

describe("validatePassword", () => {
    it("should return false for empty password", () => {
        expect(validatePassword("")).toBe(false)
    })


});