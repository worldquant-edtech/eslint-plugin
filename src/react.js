import react from 'eslint-plugin-react';

export default {
  files: ['**/*.{js,jsx,ts,tsx}'],
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
    ...react.configs['recommended'].rules,
    ...react.configs['jsx-runtime'].rules,
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: '<',
            alternatives: ['&lt;'],
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
