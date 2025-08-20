import * as plugin from 'eslint-plugin-import';
import importRules from './importRules.js';

const { parserOptions, ...rest } = plugin.configs.recommended;

export default {
  ...rest,
  files: ['**/*.{ts,tsx,js,jsx}'],
  plugins: {
    import: plugin,
  },
  rules: {
    'prefer-const': 'off',
    ...importRules,
  },
};
