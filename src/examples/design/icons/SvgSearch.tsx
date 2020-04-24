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
import { getColor } from '@zendeskgarden/react-theming';

const StyledSvgWrapper = styled.div<{ isAnswerBot?: boolean }>`
  display: flex;
  align-items: center;
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
        <Col key={edge.node.name} lg={4} md={4} xs={6}>
          <div
            css={css`
              display: flex;
              margin-bottom: ${p => p.theme.space.xs};
            `}
          >
            <StyledSvgWrapper
              isAnswerBot={edge.node.name === 'answer-bot'}
              dangerouslySetInnerHTML={{ __html: edge.node.childGardenSvg.content }}
            />
            <div
              css={css`
                display: flex;
                align-items: center;
                margin-left: ${p => p.theme.space.xxs};
                overflow: hidden;
              `}
            >
              <Code
                size="small"
                css={css`
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                `}
                title={edge.node.name}
              >
                {edge.node.name}
              </Code>
            </div>
          </div>
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
          <Label>Search</Label>
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
              <XL
                css={css`
                  color: ${p => getColor('grey', 400, p.theme)};
                `}
              >
                No icons found
              </XL>
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
