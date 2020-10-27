/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CodeBlock, Paragraph } from '@zendeskgarden/react-typography';

const Example = () => (
  <>
    <Paragraph>
      <CodeBlock size="small">{`
const perrenial = '  Daylily (Hemerocallis)  ';

console.log(\`🌱 \${perrenial.trim()} 🌱\`);
      `}</CodeBlock>
    </Paragraph>
    <Paragraph>
      <CodeBlock size="medium">{`
const perrenial = '  Daylily (Hemerocallis)  ';

console.log(\`🌱 \${perrenial.trim()} 🌱\`);
      `}</CodeBlock>
    </Paragraph>
    <Paragraph>
      <CodeBlock size="large">{`
const perrenial = '  Daylily (Hemerocallis)  ';

console.log(\`🌱 \${perrenial.trim()} 🌱\`);
      `}</CodeBlock>
    </Paragraph>
  </>
);

export default Example;
