/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { Item, Hint, Menu, Label, Field, Dropdown, Combobox } from '@zendeskgarden/react-dropdowns';
import { Grid } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const options = [
  'Asparagus',
  'Brussel sprouts',
  'Cauliflower',
  'Garlic',
  'Jerusalem artichoke',
  'Kale',
  'Lettuce',
  'Onion',
  'Mushroom',
  'Potato',
  'Radish',
  'Spinach',
  'Tomato',
  'Yam',
  'Zucchini'
];

const Example = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState<string[]>([]);
  const [compactInputValue, setCompactInputValue] = useState('');
  const [compactMatchingOptions, setCompactMatchingOptions] = useState<string[]>([]);

  /**
   * Debounce filtering
   */
  const filterMatchingOptions = useMemo(
    () =>
      debounce((value: string, compact?: boolean) => {
        if (value.length > 0) {
          const valueRegexp = new RegExp(value!, 'gui');

          (compact ? setCompactMatchingOptions : setMatchingOptions)(
            options.filter(option => option.match(valueRegexp)) || []
          );
        } else {
          (compact ? setCompactMatchingOptions : setMatchingOptions)([]);
        }
        setIsLoading(false);
      }, 250),
    []
  );

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptions(inputValue);

    return () => filterMatchingOptions.cancel();
  }, [filterMatchingOptions, inputValue]);

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptions(compactInputValue, true);

    return () => filterMatchingOptions.cancel();
  }, [filterMatchingOptions, compactInputValue]);

  const renderOptions = (opts: string[]) => {
    if (isLoading) {
      return <Item disabled>Loading items...</Item>;
    }

    if (opts.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return opts.map(option => (
      <Item key={option} value={option}>
        <span>{option}</span>
      </Item>
    ));
  };

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Dropdown
          inputValue={inputValue}
          onSelect={item => setInputValue(item)}
          onInputValueChange={value => setInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label>Default</Label>
            <Hint>Choose a vegetable</Hint>
            <Combobox start={<SearchIcon />} placeholder="Search vegetables" />
          </Field>
          <Menu>{renderOptions(matchingOptions)}</Menu>
        </Dropdown>
      </Grid.Col>
      <StyledCol sm={5}>
        <Dropdown
          inputValue={compactInputValue}
          onSelect={item => setCompactInputValue(item)}
          onInputValueChange={value => setCompactInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label>Compact</Label>
            <Hint>Choose a vegetable</Hint>
            <Combobox isCompact start={<SearchIcon />} placeholder="Search vegetables" />
          </Field>
          <Menu isCompact>{renderOptions(compactMatchingOptions)}</Menu>
        </Dropdown>
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
