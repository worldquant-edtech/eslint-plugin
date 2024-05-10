import js from '@eslint/js';

export default {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    ...js.configs.recommended.rules,
    semi: 'error',
    'no-console': 'warn',
    curly: ['error', 'multi-line', 'consistent'],
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
  },
};
