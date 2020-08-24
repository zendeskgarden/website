/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { UnorderedList } from '@zendeskgarden/react-typography';

const StyledUnorderedList = styled(UnorderedList)`
  margin-top: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <UnorderedList size="small">
      <UnorderedList.Item>
        The world&apos;s tallest-growing tree is the coast redwood
      </UnorderedList.Item>
      <UnorderedList.Item>Bamboo can grow 35 inches in a single day</UnorderedList.Item>
      <UnorderedList.Item>During the 1600s, tulips were worth more than gold</UnorderedList.Item>
    </UnorderedList>
    <StyledUnorderedList size="medium">
      <UnorderedList.Item>
        The world&apos;s tallest-growing tree is the coast redwood
      </UnorderedList.Item>
      <UnorderedList.Item>Bamboo can grow 35 inches in a single day</UnorderedList.Item>
      <UnorderedList.Item>During the 1600s, tulips were worth more than gold</UnorderedList.Item>
    </StyledUnorderedList>
    <StyledUnorderedList size="large">
      <UnorderedList.Item>
        The world&apos;s tallest-growing tree is the coast redwood
      </UnorderedList.Item>
      <UnorderedList.Item>Bamboo can grow 35 inches in a single day</UnorderedList.Item>
      <UnorderedList.Item>During the 1600s, tulips were worth more than gold</UnorderedList.Item>
    </StyledUnorderedList>
  </>
);

export default Example;
