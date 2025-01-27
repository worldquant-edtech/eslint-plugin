import * as plugin from 'eslint-plugin-import';

const { parserOptions, ...rest } = plugin.configs.recommended;

export default {
  ...rest,
  files: ['**/*.{js,jsx}'],
  plugins: {
    import: plugin,
  },
  rules: {
    'import/no-unresolved': [
      'warn',
      {
        // package.json "style" may be used here which
        // will resolve for webpack but not within the
        // eslint plugin
        ignore: ['\\.css$'],
      },
    ],
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
          {
            pattern: 'assets',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: 'assets/**',
            group: 'sibling',
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
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json'],
      },
    },
  },
};
