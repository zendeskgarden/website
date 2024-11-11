/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import prettierConfig from 'eslint-config-prettier';
import config from '@zendeskgarden/eslint-config';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import reactPlugin from '@zendeskgarden/eslint-config/plugins/react.js';
import typeScriptPlugin from '@zendeskgarden/eslint-config/plugins/typescript.js';
import typeScriptTypeCheckedPlugin from '@zendeskgarden/eslint-config/plugins/typescript-type-checked.js';

export default [
  ...config,
  noticePlugin,
  reactPlugin,
  prettierConfig,
  {
    ignores: [
      '**/node_modules/**',
      '**/public/**',
      '**/.cache/**',
      '**/.github/**',
      '**/react-components/**',
      '**/graphql.config.js'
    ]
  },
  {
    rules: {
      'sort-imports': 'off',
      'jsx-a11y/prefer-tag-over-role': 'off',
      'react/destructuring-assignment': 'off',
      'react/display-name': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...typeScriptPlugin,
    ...typeScriptTypeCheckedPlugin,
    rules: {
      ...typeScriptPlugin.rules,
      ...typeScriptTypeCheckedPlugin.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'react/prop-types': 'off'
    }
  },
  {
    files: ['**/src/examples/**'],
    rules: {
      'no-alert': 'off',
      'jsx-a11y/img-redundant-alt': 'off',
      'n/no-unsupported-features/es-builtins': ['error', { version: '>=20.0.0' }]
    }
  }
];
