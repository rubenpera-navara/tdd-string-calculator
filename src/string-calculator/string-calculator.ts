export class StringCalculator {
    add(numbers: string): number {
        const result = parseInt(numbers);

        return isNaN(result) ? 0 : result;
    }
}