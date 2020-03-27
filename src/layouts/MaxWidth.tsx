/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

const MaxWidthLayout = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${p => p.theme.breakpoints.xl};
`;

export default MaxWidthLayout;
