import plugin from 'eslint-plugin-react';

const { parserOptions, ...rest } = plugin.configs.recommended;

export default {
  ...rest,
  plugins: {
    react: plugin,
  },
  languageOptions: {
    parserOptions,
  },
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-key': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
