const length = require('./string-length');

describe('length test', () => {
  it('length', () => {
    expect(length('hello')).toBe(5);
  });

  it('invalid', () => {
    expect(() => {
      length('');
    }).toThrow();
  });

  it('invalid', () => {
    expect(() => {
      length('helloinvalid');
    }).toThrow();
  });
});
