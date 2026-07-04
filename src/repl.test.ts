import { describe, expect, test } from "vitest";
import { cleanInput } from "./repl.js";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  // TODO: more test cases here
])("cleanInput($input)", ({ input: actual, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actualCleansed = cleanInput(actual);

    expect(actualCleansed).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actualCleansed[i]).toBe(expected[i]);
    }
  });
});
