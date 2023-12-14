const filter = require('./filter_array.js');
const compose = require('./function_composition.js');
const once = require('./one_call.js');

console.log(filter([0,10,20,30], (n) => {return n > 10}));

describe('tests task from the leetcode', () => {
  test.each([
    [[0,10,20,30], (n) => {return n > 10}, [20,30]],
    [[], (n, i) => {return i === 0}, []],
  ])('array filter correct value', (array_original, function_filter, result) => {
    expect(filter(array_original, function_filter)).toEqual(result);
  });

  test.each([
    [[x => x + 1, x => x * x, x => 2 * x], 4, 65],
    [[x => 10 * x, x => 10 * x, x => 10 * x], 1, 1000],
  ])('function composition correct value', (functions, start_value, result) => {
    const fn = compose(functions);
    expect(fn(start_value)).toBe(result);
  });

  test('one call', () => {
    const onceFn = once((a,b,c) => (a + b + c));
    expect(onceFn(1,2,3)).toBe(6);
  });

  test('two call', () => {
    const onceFn = once((a,b,c) => (a + b + c));
    onceFn(1,2,3)
    expect(onceFn(1,2,3)).toBeUndefined();
  });


});