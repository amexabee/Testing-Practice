function stringLength(string) {
  if (string.length < 1 || string.length > 10) throw new Error('out of bound');
  return string.length;
}

module.exports = stringLength;
