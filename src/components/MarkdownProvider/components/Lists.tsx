/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useContext } from 'react';
import { UnorderedList, OrderedList } from '@zendeskgarden/react-typography';
import { css } from 'styled-components';
import { math } from 'polished';

const ListContext = createContext<'ol' | 'ul' | undefined>(undefined);

/**
 * 1. Lists following a paragraph sibling must have negative margin to achieve intended `space.sm` margining.
 */
const listStyling = css`
  margin-bottom: ${p => p.theme.space.md};
  margin-left: ${p => p.theme.space.lg};

  p + & {
    margin-top: ${p => math(`${p.theme.space.sm} - ${p.theme.space.md}`)}; /* [1] */
  }
`;

export const UL: React.FC = props => {
  return (
    <ListContext.Provider value="ul">
      <UnorderedList {...props} css={listStyling} />
    </ListContext.Provider>
  );
};

export const OL: React.FC = props => {
  return (
    <ListContext.Provider value="ol">
      <OrderedList {...props} css={listStyling} />
    </ListContext.Provider>
  );
};

/**
 * Markdown doesn't differentiate between UL or OL list items.
 * This renders the correct component based on the parent element.
 */
export const LI: React.FC = props => {
  const listType = useContext(ListContext);

  if (listType === 'ol') {
    return <OrderedList.Item {...props} />;
  }

  return <UnorderedList.Item {...props} />;
};
