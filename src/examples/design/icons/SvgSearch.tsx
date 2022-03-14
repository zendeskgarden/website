/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import debounce from 'lodash/debounce';
import type { DebouncedFunc } from 'lodash';
import { rgba } from 'polished';
import { Field, MediaInput, Label } from '@zendeskgarden/react-forms';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { Code, MD, XL } from '@zendeskgarden/react-typography';
import { Button } from '@zendeskgarden/react-buttons';
import { PALETTE } from '@zendeskgarden/react-theming';
import styled, { css } from 'styled-components';

const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 ${p => p.theme.space.lg};
`;

const StyledSvgWrapper = styled.div<{ isAnswerBot?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 0 ${p => p.theme.space.sm};
  fill: ${p => p.isAnswerBot && PALETTE.kale[700]};
  color: ${p => p.isAnswerBot && '#d6eef1'};
`;

const StyledMD = styled(MD)`
  margin-top: ${p => p.theme.space.sm};
  margin-bottom: ${p => p.theme.space.sm};
`;

const StyledHiddenParagraph = styled.p`
  display: none;
`;

const StyledGradient = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(0deg, #fff 14%, ${rgba(255, 255, 255, 0)} 100%);
  width: 100%;
  height: 200px;
`;

const StyledCol = styled(Col).attrs({ forwardedAs: 'li' })`
  margin-bottom: ${p => p.theme.space.lg};
`;

const StyledRow = styled(Row).attrs({ forwardedAs: 'ul' })``;

const StyledTokenContainer = styled(StyledRow)<{ isExpand: boolean }>`
  position: relative;
  overflow-y: hidden;
  max-height: ${p => (p.isExpand ? `620px` : `inherit`)};
`;

interface ISvgNodeProps {
  node: {
    name: string;
    relativeDirectory: string;
    childGardenSvg: {
      alternatives?: string[];
      token?: string;
      content: string;
    };
  };
}

interface ISvgSearchProps {
  searchEnabled?: boolean;
  data: {
    edges: ISvgNodeProps[];
  };
}

type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Icon = (edge: ISvgNodeProps) => {
  const token = edge.node.childGardenSvg.token;
  const alternativeName = edge.node.childGardenSvg.alternatives;

  return (
    <StyledCol lg={3} md={4} xs={6}>
      <StyledIconWrapper>
        {token && <StyledMD>{token}</StyledMD>}
        <StyledSvgWrapper
          isAnswerBot={edge.node.name === 'answer-bot'}
          // eslint-disable-next-line @typescript-eslint/naming-convention
          dangerouslySetInnerHTML={{ __html: edge.node.childGardenSvg.content }}
        />
        <Code size="small" title={edge.node.name}>
          {edge.node.name}
        </Code>
        {alternativeName?.map(name => (
          <StyledHiddenParagraph key={name}>{name}</StyledHiddenParagraph>
        ))}
      </StyledIconWrapper>
    </StyledCol>
  );
};

export const SvgSearch: React.FC<ISvgSearchProps> = ({ data, searchEnabled }) => {
  const [inputValue, setInputValue] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const debounceRef = useRef<DebouncedFunc<ChangeHandler>>();

  const icons = useMemo(() => {
    return data.edges
      .filter(edge => {
        const formattedSearchValue = inputValue.trim().toLowerCase();

        // Returns every icons, since the search value is empty.
        if (formattedSearchValue.length === 0) {
          return true;
        }

        if (formattedSearchValue.length) {
          setCollapsed(false);
        }

        return edge.node.name.trim().toLowerCase().includes(formattedSearchValue);
      })
      .map(edge => {
        return <Icon key={edge.node.name} {...edge} />;
      });
  }, [data.edges, inputValue]);

  useEffect(() => {
    debounceRef.current = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    }, 300);

    return () => {
      debounceRef.current!.cancel();
    };
  }, []);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      debounceRef.current!(event);
    },
    [debounceRef]
  );

  return (
    <div>
      {searchEnabled && (
        <Row>
          <Col size={8}>
            <Field
              css={css`
                margin-bottom: ${p => p.theme.space.lg};
              `}
            >
              <Label>Search icons</Label>
              <MediaInput start={<SearchStroke />} onChange={onInputChange} />
            </Field>
          </Col>
        </Row>
      )}
      <Grid>
        <StyledTokenContainer isExpand={collapsed}>
          {icons}
          {collapsed && <StyledGradient />}
        </StyledTokenContainer>
        {icons.length === 0 && (
          <StyledRow>
            <StyledCol textAlign="center">
              <XL>No icons found</XL>
            </StyledCol>
          </StyledRow>
        )}
        {collapsed && (
          <StyledRow>
            <Button
              isStretched
              css={css`
                margin: auto;
                max-width: 50%;
              `}
              size="large"
              onClick={() => setCollapsed(false)}
            >
              View all icons
            </Button>
          </StyledRow>
        )}
      </Grid>
    </div>
  );
};

SvgSearch.defaultProps = {
  searchEnabled: true
};
