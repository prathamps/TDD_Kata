import {describe, it, expect} from "vitest";
import {add} from "./string-calculator"

describe("StringCalculator", () => {
    it("should return 0 for empty string", () => {
        expect(add("")).toBe(0);
    })


})