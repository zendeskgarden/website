/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CodeBlock } from '@zendeskgarden/react-typography';

const Example = () => (
  <CodeBlock language="diff">{`
@@ -1,18 +1,20 @@
+# A Garden of Roses
+
 Roses are red,
 Violets are blue,
 Sugar is sweet,
 And so are you.

 ***

 Roses are red,
-Violets are blue,
-I’m unoriginal,
-This is all I can do.
+My screen is blue,
+The system crashed,
+do {} while (true)

 ***

 Roses are red,
 Violets are blue,
-Actually kind of purple,
-Maybe more of a [royal-M400](https://garden.zendesk.com/design/color)?
+TL;DR,
+They differ in hue.
  `}</CodeBlock>
);

export default Example;
