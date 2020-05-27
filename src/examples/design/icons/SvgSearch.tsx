/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import debounce from 'lodash/debounce';
import { Field, MediaInput, Label } from '@zendeskgarden/react-forms';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { Code, XL } from '@zendeskgarden/react-typography';
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
  fill: ${p => p.isAnswerBot && '#616788'};
  color: ${p => p.isAnswerBot && '#d0eeec'};
`;

export const SvgSearch: React.FC<{
  searchEnabled?: boolean;
  data: {
    edges: [
      { node: { name: string; relativeDirectory: string; childGardenSvg: { content: string } } }
    ];
  };
}> = ({ data, searchEnabled }) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatedDebouncedInputValue = useCallback(
    debounce((value: string) => {
      setDebouncedInputValue(value);
    }, 300),
    []
  );

  useEffect(() => {
    updatedDebouncedInputValue(inputValue);
  }, [inputValue, updatedDebouncedInputValue]);

  const icons = useMemo(() => {
    return data.edges
      .filter(edge => {
        const formattedSearchValue = debouncedInputValue.trim().toLowerCase();

        if (formattedSearchValue.length === 0) {
          return true;
        }

        return edge.node.name.trim().toLowerCase().includes(formattedSearchValue);
      })
      .map(edge => (
        <Col key={edge.node.name} lg={3} md={4} xs={6}>
          <StyledIconWrapper>
            <StyledSvgWrapper
              isAnswerBot={edge.node.name === 'answer-bot'}
              dangerouslySetInnerHTML={{ __html: edge.node.childGardenSvg.content }}
            />
            <Code size="small" title={edge.node.name}>
              {edge.node.name}
            </Code>
          </StyledIconWrapper>
        </Col>
      ));
  }, [data, debouncedInputValue]);

  return (
    <div>
      {searchEnabled && (
        <Field
          css={css`
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          <Label>Filter icons</Label>
          <MediaInput
            start={<SearchStroke />}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </Field>
      )}
      <Grid>
        <Row>
          {icons}
          {icons.length === 0 && (
            <Col
              css={`
                text-align: center;
              `}
            >
              <XL>No icons found</XL>
            </Col>
          )}
        </Row>
      </Grid>
    </div>
  );
};

SvgSearch.defaultProps = {
  searchEnabled: true
};
