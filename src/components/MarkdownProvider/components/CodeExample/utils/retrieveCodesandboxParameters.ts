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
import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@zendeskgarden/react-theming";

/** Some opinionated style resets for Zendesk products. Optional. */
import '@zendeskgarden/css-bedrock';

import Example from "./Example";

const rootElement = document.getElementById("root");
render(
  <div style={{ padding: 16 }}>
    <ThemeProvider>
      <Example />
    </ThemeProvider>
  </div>,
  rootElement
);
`;

const packageJson = `
{
  "dependencies": {
    "react-scripts": "latest",
    "react": "latest",
    "react-dom": "latest",
    "styled-components": "latest",
    "lodash.debounce": "latest",
    "@zendeskgarden/css-bedrock": "^8.x",
    "@zendeskgarden/react-avatars": "^8.x",
    "@zendeskgarden/react-breadcrumbs": "^8.x",
    "@zendeskgarden/react-buttons": "^8.x",
    "@zendeskgarden/react-chrome": "^8.x",
    "@zendeskgarden/container-utilities": "^0.5.4",
    "@zendeskgarden/react-dropdowns": "^8.x",
    "@zendeskgarden/react-grid": "^8.x",
    "@zendeskgarden/react-loaders": "^8.x",
    "@zendeskgarden/react-modals": "^8.x",
    "@zendeskgarden/react-notifications": "^8.x",
    "@zendeskgarden/react-pagination": "^8.x",
    "@zendeskgarden/react-tables": "^8.x",
    "@zendeskgarden/react-tabs": "^8.x",
    "@zendeskgarden/react-tags": "^8.x",
    "@zendeskgarden/react-theming": "^8.x",
    "@zendeskgarden/react-typography": "^8.x",
    "@zendeskgarden/svg-icons": "^6.17.0"
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
