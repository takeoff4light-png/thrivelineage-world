import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore generated / vendor output
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**', 'coverage/**'],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules (no type-checking required; fast + reliable baseline)
  ...tseslint.configs.recommended,

  // Next.js rules
  {
    plugins: { '@next/next': next },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },

  // Keep this LAST to turn off formatting-related ESLint rules
  prettier,
];
