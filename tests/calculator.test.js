const calculate = require('./calculator');

const calc = new calculate();

describe('calculate', () => {
  it('add', () => {
    expect(calc.add(10, 5)).toBe(15);
  });
  it('subtract', () => {
    expect(calc.subtract(10, 5)).toBe(5);
  });
  it('multipy', () => {
    expect(calc.multiply(10, 5)).toBe(50);
  });
  it('divide', () => {
    expect(calc.divide(10, 5)).toBe(2);
  });
});
