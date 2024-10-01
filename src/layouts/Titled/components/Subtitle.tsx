/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColorV8 } from '@zendeskgarden/react-theming';
import { LG } from '@zendeskgarden/react-typography';

export const Subtitle = styled(LG).attrs({ tag: 'p' })`
  max-width: 540px;
  color: ${p => getColorV8('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.space.base * 4}px;
`;
