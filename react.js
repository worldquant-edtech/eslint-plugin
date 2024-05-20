import react from 'eslint-plugin-react';
import globals from 'globals';

// This dependency can be removed when this lands:
// https://github.com/jsx-eslint/eslint-plugin-react/issues/3699
import { fixupPluginRules } from '@eslint/compat';

export default {
  files: ['**/*.{js,jsx}'],
  plugins: {
    react: fixupPluginRules(react),
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    ...react.configs['recommended'].rules,
    ...react.configs['jsx-runtime'].rules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
