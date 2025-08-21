import path from 'path';
import * as plugin from 'eslint-plugin-import';
import importRules from './importRules.js';

const file = path.join(process.cwd(), 'vite.config.js');
const { default: viteConfig } = await import(file);

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
        viteConfig,
      },
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
