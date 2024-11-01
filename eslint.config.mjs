import { FlatCompat } from '@eslint/eslintrc';
import stylisticPlugin from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  {
    ignores: ['public/**/*', '.cache/**/*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      // Custom rules here
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],

      // Stylistic rules:
      '@stylistic/semi': 'error',
      'quotes': ['error', 'single'], // Enforce single quotes
      "comma-dangle": ['error', 'always-multiline'], // Enforce trailing commas
    },
  },
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];