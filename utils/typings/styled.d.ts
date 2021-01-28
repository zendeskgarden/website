/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import 'styled-components';
import { IGardenTheme } from '@zendeskgarden/react-theming';

declare module 'styled-components' {
  export type Hue = Record<number | string, string> | string;

  /* eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends IGardenTheme {}
}
