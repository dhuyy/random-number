module.exports = {
  singleQuote: true, // INFO: non-default option (default: false)
  trailingComma: 'es5', // INFO: non-default option (default: "none")
  proseWrap: 'always',
  arrowParens: 'avoid',
  importOrderSeparation: false,
  importOrder: [
    '^react', // React will be placed at the top of third-party modules
    '<THIRD_PARTY_MODULES>',
    '', // empty string to add a newline between groups
    '^[./]',
  ],
};
