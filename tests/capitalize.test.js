const capitalize = require('./capitalize');

it('caps', () => {
  expect(capitalize('hello')).toBe('Hello');
});
