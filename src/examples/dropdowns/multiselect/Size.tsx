/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Dropdown, Multiselect, Field, Menu, Item, Label } from '@zendeskgarden/react-dropdowns';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Tag } from '@zendeskgarden/react-tags';
import debounce from 'lodash.debounce';

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

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const initialSelectedItems = [options[0], options[1], options[2], options[3]];

const Example = () => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [compactSelectedItems, setCompactSelectedItems] = useState(initialSelectedItems);
  const [inputValue, setInputValue] = useState('');
  const [compactInputValue, setCompactInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [matchingOptions, setMatchingOptions] = useState(options);

  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const matchedOptions = options.filter(option => {
        return option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;
      });

      setMatchingOptions(matchedOptions);
      setIsLoading(false);
    }, 300)
  );

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptionsRef.current(compactInputValue);
  }, [compactInputValue]);

  const renderOptions = () => {
    if (isLoading) {
      return <Item disabled>Loading</Item>;
    }

    if (matchingOptions.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return matchingOptions.map(option => (
      <Item key={option} value={option}>
        <span>{option}</span>
      </Item>
    ));
  };

  return (
    <Grid.Row>
      <Grid.Col>
        <Dropdown
          inputValue={inputValue}
          selectedItems={selectedItems}
          onSelect={items => setSelectedItems(items)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
          onInputValueChange={value => setInputValue(value)}
        >
          <Field>
            <Label>Vegetables</Label>
            <Multiselect
              renderItem={({ value, removeValue }: any) => (
                <Tag>
                  <span>{value}</span>
                  <Tag.Close onClick={() => removeValue()} />
                </Tag>
              )}
            />
          </Field>
          <Menu>{renderOptions()}</Menu>
        </Dropdown>
      </Grid.Col>
      <StyledCol>
        <Dropdown
          inputValue={compactInputValue}
          selectedItems={compactSelectedItems}
          onSelect={items => setCompactSelectedItems(items)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
          onInputValueChange={value => setCompactInputValue(value)}
        >
          <Field>
            <Label>Vegetables</Label>
            <Multiselect
              isCompact
              renderItem={({ value, removeValue }: any) => (
                <Tag>
                  <span>{value}</span>
                  <Tag.Close onClick={() => removeValue()} />
                </Tag>
              )}
            />
          </Field>
          <Menu isCompact>{renderOptions()}</Menu>
        </Dropdown>
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
