/* eslint-disable @typescript-eslint/no-require-imports */
// postcss.config.cjs

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.cjs'), // Ajuste o caminho conforme necessário
    autoprefixer(),
  ],
};
