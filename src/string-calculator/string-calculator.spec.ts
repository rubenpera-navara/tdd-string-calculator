import {StringCalculator} from "./string-calculator";

describe('StringCalculator', () => {
    describe('add', () => {
        it('should return 0 for an empty string', () => {
            // Arrange
            const stringCalculator = new StringCalculator();

            // Act
            const result = stringCalculator.add('');

            // Assert
            expect(result).toBe(0);
        });
    })
})