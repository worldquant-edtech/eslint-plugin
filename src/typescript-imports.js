import * as plugin from 'eslint-plugin-import';

const { parserOptions, ...rest } = plugin.configs.recommended;

export default {
  ...rest,
  files: ['**/*.{ts,tsx}'],
  plugins: {
    import: plugin,
  },
  rules: {
    'prefer-const': 'off',
    'import/no-unresolved': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: 'utils',
            group: 'internal',
          },
          {
            pattern: 'utils/**',
            group: 'internal',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
};
