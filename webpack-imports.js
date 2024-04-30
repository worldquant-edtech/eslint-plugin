import plugin from 'eslint-plugin-import';

const { parserOptions, ...rest } = plugin.configs.recommended;

export default {
  ...rest,
  plugins: {
    import: plugin,
  },
  rules: {
    'import/no-unresolved': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: 'semantic',
            group: 'external',
          },
          {
            pattern: '+(stores|helpers|layouts)',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '+(stores|helpers|layouts)/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '+(screens|modals|components)',
            group: 'internal',
          },
          {
            pattern: '+(screens|modals|components)/**',
            group: 'internal',
          },
          {
            pattern: 'utils',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'utils/**',
            group: 'internal',
            position: 'after',
          },
        ],
        groups: [
          'builtin',
          'unknown',
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
  settings: {
    'import/resolver': 'webpack',
  },
};
