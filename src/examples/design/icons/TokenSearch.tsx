/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Code, MD } from '@zendeskgarden/react-typography';
import styled from 'styled-components';

const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 ${p => p.theme.space.lg};
`;

const StyledRow = styled(Row).attrs({ forwardedAs: 'ul' })``;

const StyledCol = styled(Col).attrs({ forwardedAs: 'li' })`
  margin-bottom: ${p => p.theme.space.lg};
`;

const StyledHiddenParagraph = styled.p`
  display: none;
`;

const StyledSvgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 ${p => p.theme.space.sm};
`;

const StyledTokenContainer = styled(StyledRow)`
  position: relative;
  overflow-y: hidden;
`;

const StyledMD = styled(MD)`
  &::first-letter {
    text-transform: uppercase;
  }
  margin-top: ${p => p.theme.space.sm};
  margin-bottom: ${p => p.theme.space.sm};
`;

const Icon = (props: any) => {
  const { icon: iconName, id: token, svg, synonyms } = props;

  return (
    <StyledCol lg={3} md={4} xs={6}>
      <StyledIconWrapper>
        <StyledMD>{token}</StyledMD>
        <StyledSvgWrapper
          // eslint-disable-next-line @typescript-eslint/naming-convention
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <Code size="small" title={iconName}>
          {iconName}
        </Code>
        {synonyms?.map((synonym: string) => (
          <StyledHiddenParagraph key={synonym}>{synonym}</StyledHiddenParagraph>
        ))}
      </StyledIconWrapper>
    </StyledCol>
  );
};

export const TokenSearch: React.FC<any> = ({ data, icons }) => {
  const [inputValue] = useState('');

  const tokens = useMemo(() => {
    return data.edges
      .filter((edge: any) => {
        const formattedSearchValue = inputValue.trim().toLowerCase();

        // Returns every icons, since the search value is empty.
        if (formattedSearchValue.length === 0) {
          return true;
        }

        return edge.node.id.trim().toLowerCase().includes(formattedSearchValue);
      })
      .map((edge: any) => {
        const iconNode = icons.find((icon: any) => {
          if (edge.node.style) {
            return icon.node.name === `${edge.node.icon}-${edge.node.style}`;
          }

          return icon.node.name === edge.node.icon;
        });

        const svg = iconNode?.node.childGardenSvg.content;

        return <Icon key={edge.node.id} {...{ ...edge.node, svg }} />;
      });
  }, [data.edges, inputValue, icons]);

  return <StyledTokenContainer>{tokens}</StyledTokenContainer>;
};
