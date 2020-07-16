/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useContext } from 'react';
import { UnorderedList, OrderedList } from '@zendeskgarden/react-typography';
import { css } from 'styled-components';

const ListContext = createContext<'ol' | 'ul' | undefined>(undefined);

const listStyling = css`
  margin: ${p => p.theme.space.sm} 0 ${p => p.theme.space.sm} ${p => p.theme.space.lg};
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
