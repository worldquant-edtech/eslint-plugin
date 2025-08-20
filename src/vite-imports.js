import path from 'path';
import * as plugin from 'eslint-plugin-import';
import importRules from './importRules.js';

// const bar = path.join(process.cwd(), './vite.config.js');
// console.info('huh', bar);
const foo = await import(
  '/Users/andrew/Bedrock/core/services/web/vite.config.js'
);

export default {
  ...plugin.flatConfigs.recommended,
  files: ['**/*.{js,jsx,ts,tsx}'],
  ignores: ['node_modules/**/*', 'dist/**/*', '**/*.d.ts'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    ...plugin.flatConfigs.recommended.rules,
    ...importRules,
  },
  settings: {
    'import/resolver': {
      vite: {
        viteConfig: foo.default,
      },
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
