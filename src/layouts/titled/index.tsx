/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { XXXL, LG } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

export const TitledLayout: React.FC<{ title: React.ReactNode; description?: React.ReactNode }> = ({
  title,
  description,
  children
}) => {
  return (
    <>
      <XXXL
        tag="h1"
        css={css`
          margin-bottom: ${p => p.theme.space.xs};
        `}
      >
        {title}
      </XXXL>
      {description && (
        <LG
          css={css`
            margin-bottom: ${p => p.theme.space.lg};
            color: ${p => getColor('neutralHue', 600, p.theme)};
          `}
        >
          {description}
        </LG>
      )}
      {children}
    </>
  );
};
