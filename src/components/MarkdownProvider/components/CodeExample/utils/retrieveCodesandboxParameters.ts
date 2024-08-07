/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getParameters } from 'codesandbox/lib/api/define';

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<link rel="manifest" href="%PUBLIC_URL%/manifest.json">
	<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
	<title>React App</title>
</head>
<body>
	<noscript>
		You need to enable JavaScript to run this app.
	</noscript>
	<div id="root"></div>
</body>
</html>
`;

const index = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming';
import Example from './Example';

/* Optional CSS normalization with selected element resets */
import '@zendeskgarden/css-bedrock';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div style={{ padding: DEFAULT_THEME.space.md }}>
      <ThemeProvider>
        <Example />
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
`;

const packageJson = `
{
  "dependencies": {
    "date-fns": "latest",
    "dom-helpers": "latest",
    "react-beautiful-dnd": "latest",
    "react-scripts": "latest",
    "react": "^18.x",
    "react-dom": "^18.x",
    "styled-components": "^5.1.0",
    "lodash.debounce": "latest",
    "react-dropzone": "latest",
    "react-window": "latest",
    "use-resize-observer": "latest",
    "@dnd-kit/core": "latest",
    "@zendeskgarden/container-utilities": "^1.x",
    "@zendeskgarden/css-bedrock": "^8.x",
    "@zendeskgarden/react-accordions": "next",
    "@zendeskgarden/react-avatars": "next",
    "@zendeskgarden/react-breadcrumbs": "next",
    "@zendeskgarden/react-buttons": "next",
    "@zendeskgarden/react-chrome": "next",
    "@zendeskgarden/react-colorpickers": "next",
    "@zendeskgarden/react-datepickers": "next",
    "@zendeskgarden/react-drag-drop": "next",
    "@zendeskgarden/react-dropdowns.legacy": "next",
    "@zendeskgarden/react-dropdowns": "next",
    "@zendeskgarden/react-forms": "next",
    "@zendeskgarden/react-grid": "next",
    "@zendeskgarden/react-loaders": "next",
    "@zendeskgarden/react-modals": "next",
    "@zendeskgarden/react-notifications": "next",
    "@zendeskgarden/react-pagination": "next",
    "@zendeskgarden/react-tables": "next",
    "@zendeskgarden/react-tabs": "next",
    "@zendeskgarden/react-tags": "next",
    "@zendeskgarden/react-theming": "next",
    "@zendeskgarden/react-tooltips": "next",
    "@zendeskgarden/react-typography": "next",
    "@zendeskgarden/svg-icons": "^6.x"
  }
}
`;

const prettierRc = `
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "fluid": false
}
`;

export const retrieveCodesandboxParameters = (code: string): string => {
  return getParameters({
    files: {
      '.prettierrc': {
        content: prettierRc,
        isBinary: false
      },
      'package.json': {
        content: packageJson,
        isBinary: false
      },
      'src/index.tsx': {
        content: index,
        isBinary: false
      },
      'src/Example.tsx': {
        content: code,
        isBinary: false
      },
      'public/index.html': {
        content: html,
        isBinary: false
      }
    }
  });
};
