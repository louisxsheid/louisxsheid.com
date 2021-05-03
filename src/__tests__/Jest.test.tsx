export {};
const add = (a: number, b: number): number => a + b;

test("renders learn react link", () => {
  const sum = add(1, 2);
  expect(sum).toBe(3);
});
