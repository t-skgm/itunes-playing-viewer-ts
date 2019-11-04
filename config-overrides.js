const { override, useEslintRc, useBabelRc } = require('customize-cra');
const path = require('path');

module.exports = override(
  useEslintRc(path.resolve(__dirname, '.eslintrc.js')),
  useBabelRc()
);
