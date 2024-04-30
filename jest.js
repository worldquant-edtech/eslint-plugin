import plugin from 'eslint-plugin-jest';
import globals from 'globals';

const { env, ...rest } = plugin.configs.recommended;

export default {
  ...rest,
  plugins: {
    jest: plugin,
  },
  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },
  rules: {
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect*', 'assert*'],
      },
    ],
    'jest/no-focused-tests': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/no-conditional-expect': 'off',
  },
};
