/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Code, MD, XL } from '@zendeskgarden/react-typography';
import { Field, MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import debounce from 'lodash/debounce';
import type { DebouncedFunc } from 'lodash';
import styled, { css } from 'styled-components';

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

interface ISvgNodeProps {
  node: {
    name: string;
    relativeDirectory: string;
    childGardenSvg: {
      content: string;
    };
  };
}

interface ITokenNodeProps {
  node: {
    name: string;
    id: string;
    style?: string;
    synonyms: string[];
    icon?: string;
  };
}

interface ITokenSearchProps {
  data: {
    edges: ITokenNodeProps[];
  };
  icons: ISvgNodeProps[];
}

type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

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

export const TokenSearch: React.FC<ITokenSearchProps> = ({ data, icons }) => {
  const [inputValue, setInputValue] = useState('');
  const debounceRef = useRef<DebouncedFunc<ChangeHandler>>();

  const tokens = useMemo(() => {
    const nodes = [];
    const filteredEdges = data.edges.filter((edge: ITokenNodeProps) => {
      const formattedSearchValue = inputValue.trim().toLowerCase();

      // Returns every icons, since the search value is empty.
      if (formattedSearchValue.length === 0) {
        return true;
      }

      return edge.node.id.trim().toLowerCase().includes(formattedSearchValue);
    });

    for (const edge of filteredEdges) {
      const iconNode = icons.find((icon: ISvgNodeProps) => {
        if (edge.node.style) {
          return icon.node.name === `${edge.node.icon}-${edge.node.style}`;
        }

        return icon.node.name === edge.node.icon;
      });

      if (iconNode) {
        const svg = iconNode?.node.childGardenSvg.content;

        nodes.push(<Icon key={edge.node.id} {...{ ...edge.node, svg }} />);
      }
    }

    return nodes;
  }, [data.edges, inputValue, icons]);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debounceRef.current!(event);
    },
    [debounceRef]
  );

  useEffect(() => {
    debounceRef.current = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    }, 300);

    return () => {
      debounceRef.current!.cancel();
    };
  }, []);

  return (
    <div>
      <Grid>
        <Row>
          <Col size={8}>
            <Field
              css={css`
                margin-bottom: ${p => p.theme.space.lg};
              `}
            >
              <MediaInput
                start={<SearchStroke />}
                onChange={onInputChange}
                placeholder="Filter tokens"
              />
            </Field>
          </Col>
        </Row>
        <StyledTokenContainer>{tokens}</StyledTokenContainer>
        {tokens.length === 0 && (
          <StyledRow>
            <StyledCol textAlign="center">
              <XL>No tokens found</XL>
            </StyledCol>
          </StyledRow>
        )}
      </Grid>
    </div>
  );
};
