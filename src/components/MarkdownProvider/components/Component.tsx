/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { MD, Span } from '@zendeskgarden/react-typography';
import { IComponentData } from '../../../components/types';
import { StyledParagraph as Paragraph } from './Typography';
import { Markdown } from './Markdown';

export const Component: React.FC<{
  components: IComponentData[];
  componentName: string;
  isDescribed: boolean;
}> = ({ components, componentName, isDescribed }) => {
  const component = components.find(c => c.name.toLowerCase() === componentName.toLowerCase())!;

  return (
    <>
      {!!component.extends && (
        <Paragraph>
          Extends{' '}
          <MD isMonospace tag="span">
            <Span hue="foreground.subtle">{component.extends}</Span>
          </MD>
        </Paragraph>
      )}
      {!!isDescribed && (
        <Paragraph>
          <Markdown>{component.description}</Markdown>
        </Paragraph>
      )}
    </>
  );
};
