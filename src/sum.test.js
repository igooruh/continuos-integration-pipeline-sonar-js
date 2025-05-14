const {
  sum,
  sub
} = require('./sum');

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

test('sub 7 - 2 to equal 5', () => {
  expect(sub(7, 2)).toBe(5);
})
