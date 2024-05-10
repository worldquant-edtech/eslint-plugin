import react from 'eslint-plugin-react';
import globals from 'globals';
import js from '@eslint/js';

// This branch is on hold until both these are resolved:
// https://github.com/jsx-eslint/eslint-plugin-react/issues/3699
// https://github.com/eslint/eslint/issues/18437

export default {
  plugins: {
    react,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    ...react.configs.recommended.rules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
