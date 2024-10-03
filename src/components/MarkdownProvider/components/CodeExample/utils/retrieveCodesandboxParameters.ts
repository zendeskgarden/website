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
    "react-scripts": "latest",
    "react": "^18.x",
    "react-dom": "^18.x",
    "styled-components": "^5.1.0",
    "lodash.debounce": "latest",
    "react-dropzone": "latest",
    "react-window": "latest",
    "use-resize-observer": "latest",
    "@dnd-kit/core": "latest",
    "@dnd-kit/sortable": "latest",
    "@zendeskgarden/container-utilities": "^1.x",
    "@zendeskgarden/css-bedrock": "^9.x",
    "@zendeskgarden/react-accordions": "^9.x",
    "@zendeskgarden/react-avatars": "^9.x",
    "@zendeskgarden/react-breadcrumbs": "^9.x",
    "@zendeskgarden/react-buttons": "^9.x",
    "@zendeskgarden/react-chrome": "^9.x",
    "@zendeskgarden/react-colorpickers": "^9.x",
    "@zendeskgarden/react-datepickers": "^9.x",
    "@zendeskgarden/react-drag-drop": "^9.x",
    "@zendeskgarden/react-dropdowns": "^9.x",
    "@zendeskgarden/react-dropdowns.next": "^9.x",
    "@zendeskgarden/react-forms": "^9.x",
    "@zendeskgarden/react-grid": "^9.x",
    "@zendeskgarden/react-loaders": "^9.x",
    "@zendeskgarden/react-modals": "^9.x",
    "@zendeskgarden/react-notifications": "^9.x",
    "@zendeskgarden/react-pagination": "^9.x",
    "@zendeskgarden/react-tables": "^9.x",
    "@zendeskgarden/react-tabs": "^9.x",
    "@zendeskgarden/react-tags": "^9.x",
    "@zendeskgarden/react-theming": "^9.x",
    "@zendeskgarden/react-tooltips": "^9.x",
    "@zendeskgarden/react-typography": "^9.x",
    "@zendeskgarden/svg-icons": "^7.x"
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
