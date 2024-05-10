import plugin from 'eslint-plugin-jest';
import globals from 'globals';

export default {
  ...plugin.configs['flat/recommended'],
  files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
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
