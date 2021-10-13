/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CodeBlock } from '@zendeskgarden/react-typography';

const Example = () => (
  <CodeBlock language="diff" isLight>{`
@@ -1,9 +1,11 @@
-In The Rain
+Dancin’ In The Rain

-The rain
-does not bother me.
+So what if it drizzles
+And dribbles and drips?
 I’ll splash in the garden,
-I will stay on the ground.
+I’ll dance on the roof.
-My epidermis
-Provides a layer of protection.
+Let it rain on my skin,
+It can’t get in—
 I’m waterproof.

+– Shel Silverstein
  `}</CodeBlock>
);

export default Example;
