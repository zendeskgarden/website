/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import debounce from 'lodash/debounce';
import type { DebouncedFunc } from 'lodash';
import { Field, MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { Code, XL } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';
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
  fill: ${p => p.isAnswerBot && getColor({ theme: p.theme, hue: 'kale', shade: 900 })};
  color: ${p =>
    p.isAnswerBot ? '#d6eef1' : getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

const StyledCol = styled(Grid.Col).attrs({ forwardedAs: 'li' })`
  margin-bottom: ${p => p.theme.space.lg};
`;

const StyledRow = styled(Grid.Row).attrs({ forwardedAs: 'ul' })`
  list-style-type: none;
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

interface ISvgSearchProps {
  searchEnabled?: boolean;
  data: {
    edges: ISvgNodeProps[];
  };
  inputPlaceholder?: string;
}

type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Icon = (edge: ISvgNodeProps) => {
  return (
    <StyledCol lg={3} md={4} xs={6}>
      <StyledIconWrapper>
        <StyledSvgWrapper
          isAnswerBot={edge.node.name === 'answer-bot'}
          dangerouslySetInnerHTML={{ __html: edge.node.childGardenSvg.content }}
        />
        <Code size="small" title={edge.node.name}>
          {edge.node.name}
        </Code>
      </StyledIconWrapper>
    </StyledCol>
  );
};

export const SvgSearch: React.FC<ISvgSearchProps> = ({
  data,
  inputPlaceholder,
  searchEnabled = true
}) => {
  const [inputValue, setInputValue] = useState('');
  const debounceRef = useRef<DebouncedFunc<ChangeHandler>>();

  const icons = useMemo(() => {
    return data.edges
      .filter(edge => {
        const formattedSearchValue = inputValue.trim().toLowerCase();

        // Returns every icons, since the search value is empty.
        if (formattedSearchValue.length === 0) {
          return true;
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
      {!!searchEnabled && (
        <Grid.Row>
          <Grid.Col size={8}>
            <Field
              css={css`
                margin-bottom: ${p => p.theme.space.lg};
              `}
            >
              <Field.Label hidden>Search icons</Field.Label>
              <MediaInput
                start={<SearchStroke />}
                placeholder={inputPlaceholder}
                onChange={onInputChange}
              />
            </Field>
          </Grid.Col>
        </Grid.Row>
      )}
      <Grid>
        <StyledRow>{icons}</StyledRow>
        {icons.length === 0 && (
          <StyledRow>
            <StyledCol textAlign="center">
              <XL>No icons found</XL>
            </StyledCol>
          </StyledRow>
        )}
      </Grid>
    </div>
  );
};
