import * as plugin from 'eslint-plugin-import';

export default {
  ...plugin.flatConfigs.recommended,
  files: ['**/*.{js,jsx}'],
  ignores: ['node_modules/**/*', 'dist/**/*', '**/*.d.ts'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
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
            pattern:
              '+(stores|helpers|layouts|@stores|@helpers|@layouts){,/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern:
              '+(screens|modals|components|@screens|@modals|@components){,/**}',
            group: 'internal',
          },
          {
            pattern: '+(utils|@utils){,/**}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '+(assets|@assets){,**}',
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
      exports: true,
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
          '.css',
          '.less',
          '.png',
          '.jpg',
          '.jpeg',
          '.gif',
          '.svg',
          '.webp',
          '.webm',
          '.mp4',
        ],
      },
    },
  },
};
