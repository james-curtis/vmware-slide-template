/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ['@prettier/plugin-xml'],
  overrides: [
    {
      files: '*.xml',
      options: {
        xmlSortAttributesByKey: true,
      },
    },
  ],
}

module.exports = config
