const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { hairlineWidth } = require('nativewind/dist/theme-functions');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    borderWidth: {
      hairline: hairlineWidth(),
    },
  },
  plugins: [],
};
