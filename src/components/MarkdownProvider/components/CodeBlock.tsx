/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { CodeBlock } from '@zendeskgarden/react-typography';

export const StyledCodeBlock = styled(CodeBlock).attrs(p => ({
  language: p.className ? p.className.replace(/language-/u, '') : undefined
}))`
  margin: ${p => p.theme.space.md} 0;
  border-radius: ${p => p.theme.borderRadii.md};
`;
