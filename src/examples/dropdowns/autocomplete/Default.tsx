/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import {
  Item,
  Menu,
  Label,
  Field,
  Dropdown,
  Autocomplete
} from '@zendeskgarden/react-dropdowns.legacy';
import { Grid } from '@zendeskgarden/react-grid';

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
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState(options);

  /**
   * Debounce filtering
   */
  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const matchedOptions = options.filter(
        option => option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
      );

      setMatchingOptions(matchedOptions);
    }, 300)
  );

  useEffect(() => {
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Dropdown
          inputValue={inputValue}
          selectedItem={selectedItem}
          onSelect={item => setSelectedItem(item)}
          onInputValueChange={value => setInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label>Choose a vegetable</Label>
            <Autocomplete>{selectedItem}</Autocomplete>
          </Field>
          <Menu>
            {matchingOptions.length ? (
              matchingOptions.map(option => (
                <Item key={option} value={option}>
                  <span>{option}</span>
                </Item>
              ))
            ) : (
              <Item disabled>No matches found</Item>
            )}
          </Menu>
        </Dropdown>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
