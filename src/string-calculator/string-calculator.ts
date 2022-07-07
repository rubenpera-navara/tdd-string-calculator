export class StringCalculator {
  add(numbers: string): number {
    const commaSeperatedNumbers = numbers.replace(/\n/g, ",");

    if (commaSeperatedNumbers.includes(",,")) {
      throw "Two separators in a row!";
    }

    return commaSeperatedNumbers
      .split(",")
      .map((number) => parseInt(number))
      .map((number) => (isNaN(number) ? 0 : number))
      .reduce((prev, curr) => prev + curr, 0);
  }
}
