/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Item, Menu, Label, Field, Dropdown, Combobox } from '@zendeskgarden/react-dropdowns';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

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
  const [selectedItem, setSelectedItem] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState<string[]>([]);

  /**
   * Debounce filtering
   */
  const filterMatchingOptions = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length > 0) {
          setMatchingOptions(
            options.filter(
              option => option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
            ) || []
          );
        } else {
          setMatchingOptions([]);
        }
      }, 750),
    []
  );

  useEffect(() => {
    filterMatchingOptions(inputValue);

    return () => filterMatchingOptions.cancel();
  }, [filterMatchingOptions, inputValue]);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Dropdown
          inputValue={inputValue}
          selectedItem={selectedItem}
          onSelect={item => setSelectedItem(item)}
          onInputValueChange={value => setInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label>Choose a vegetable</Label>
            <Combobox start={<SearchIcon />} placeholder="Search vegetables">
              {selectedItem}
            </Combobox>
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
      </Col>
    </Row>
  );
};

export default Example;
