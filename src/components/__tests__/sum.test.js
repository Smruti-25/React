const { sum } = require("../sum");

test("Sum funtion should calculate the sum of two numbers", ()=>{
  const result = sum(4,5);

  expect(result).toBe(5);
})