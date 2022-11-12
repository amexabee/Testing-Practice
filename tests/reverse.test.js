const reverse = require('./reverse-string');

it('reverse', () => {
  expect(reverse('hello')).toBe('olleh');
});
