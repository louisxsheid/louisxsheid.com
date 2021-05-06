export {};
const add = (a: number, b: number): number => a + b;

test("adds together two numbers", () => {
  const sum = add(1, 2);
  expect(sum).toBe(3);
});
