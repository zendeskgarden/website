/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CodeBlock, Paragraph } from '@zendeskgarden/react-typography';

const Example = () => {
  const code = `
{
  "active": true,
  "brand_url": "https://garden.zendesk.com",
  "created_at": "2014-05-28T12:27:71Z",
  "description": "Garden is the design system by Zendesk",
  "logo": {
    "content_type": "image/png",
    "content_url": "https://garden.zendesk.com/og-image.png",
    "file_name": "og-image.png",
    "size": 29515
  },
  "name": "Zendesk Garden",
  "subdomain": "garden",
  "updated_at": "2021-02-11T12:27:71Z",
  "url": "https://garden.zendesk.com/page-data/app-data.json"
}
  `;

  const highlightLines = [3, 5, 12];

  return (
    <>
      <Paragraph>
        <CodeBlock highlightLines={highlightLines} language="json">
          {code}
        </CodeBlock>
      </Paragraph>
      <Paragraph>
        <CodeBlock highlightLines={highlightLines} isLight language="json">
          {code}
        </CodeBlock>
      </Paragraph>
    </>
  );
};

export default Example;
