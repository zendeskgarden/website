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
import typescriptTypeCheckedPlugin from '@zendeskgarden/eslint-config/plugins/typescript-type-checked.js';

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
      'jsx-a11y/prefer-tag-over-role': 'off',
      'no-unused-vars': 'off',
      'react/destructuring-assignment': 'off',
      'react/display-name': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'sort-imports': 'off'
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...typeScriptPlugin,
    ...typescriptTypeCheckedPlugin,
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/jsx-no-leaked-render': 'off',
      'react/prop-types': 'off'
    }
  },
  {
    files: ['**/src/examples/**'],
    rules: {
      'no-alert': 'off',
      'jsx-a11y/img-redundant-alt': 'off',
      'react/no-unstable-nested-components': 'off',
      'n/no-unsupported-features/es-builtins': ['error', { version: '>=20.0.0' }]
    }
  }
];
