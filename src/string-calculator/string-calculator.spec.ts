import {StringCalculator} from "./string-calculator";

describe("StringCalculator", () => {
  describe("add", () => {
    it("should return 0 for an empty string input", () => {
      // Arrange
      const stringCalculator = new StringCalculator();

      // Act
      const result = stringCalculator.add("");

            // Assert
            expect(result).toBe(0);
        });

    it.each([
      [1, "1"],
      [5, "5"],
      [10, "10"],
    ])(
      'should return value of single number input',
      (expected, number) => {
        // Arrange
        const stringCalculator = new StringCalculator();

            // Act
            const result = stringCalculator.add('1');

            // Assert
            expect(result).toBe(1);
        });
    })
})