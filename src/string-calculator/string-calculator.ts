export class StringCalculator {
  add(numbers: string): number {
    const [first, second] = numbers
      .split(",")
      .map((number) => parseInt(number))
      .map((number) => (isNaN(number) ? 0 : number));

    return (first ?? 0) + (second ?? 0);
  }
}
