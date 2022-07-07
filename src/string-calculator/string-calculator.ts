export class StringCalculator {
  add(numbers: string): number {
    return numbers
      .replace(/\n/g, ",")
      .split(",")
      .map((number) => parseInt(number))
      .map((number) => (isNaN(number) ? 0 : number))
      .reduce((prev, curr) => prev + curr, 0);
  }
}
