import { StringCalculator } from "./string-calculator";

describe("StringCalculator", () => {
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  describe("add", () => {
    it("should return 0 for an empty string", () => {
      // Arrange
      const stringCalculator = new StringCalculator();

      // Act
      const result = stringCalculator.add("");

      // Assert
      expect(result).toBe(0);
    });

    it.each([
      [3, "1,1,1"],
      [5, "1,2,2"],
      [10, "1,2,3,4"],
      [20, "1,2,3,4,4,6"],
    ])(
      "should return sum of multiple comma seperated numbers",
      (expected, numbers) => {
        // Act
        const result = stringCalculator.add(numbers);

        // Assert
        expect(result).toBe(expected);
      }
    );
  });
});
