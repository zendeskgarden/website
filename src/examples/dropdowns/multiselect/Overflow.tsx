/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Multiselect, Field, Menu, Item, Label } from '@zendeskgarden/react-dropdowns';
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

const Example = () => {
  const [selectedItems, setSelectedItems] = useState([
    options[0],
    options[1],
    options[2],
    options[3],
    options[4],
    options[5],
    options[6]
  ]);
  const [inputValue, setInputValue] = useState('');
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

  const renderOptions = () => {
    if (isLoading) {
      return <Item disabled>Loading</Item>;
    }

    if (matchingOptions.length === 0) {
      return <Item disabled>No vegetables found</Item>;
    }

    return matchingOptions.map(option => (
      <Item key={option} value={option}>
        <span>{option}</span>
      </Item>
    ));
  };

  return (
    <Dropdown
      inputValue={inputValue}
      selectedItems={selectedItems}
      onSelect={items => setSelectedItems(items)}
      downshiftProps={{ defaultHighlightedIndex: 0 }}
      onStateChange={changes => {
        if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {
          setInputValue((changes as any).inputValue);
        }
      }}
    >
      <Field>
        <Label>Vegetables</Label>
        <Multiselect
          renderItem={({ value, removeValue }: any) => (
            <Tag size="large">
              <span>{value}</span>
              <Tag.Close onClick={() => removeValue()} />
            </Tag>
          )}
        />
      </Field>
      <Menu>{renderOptions()}</Menu>
    </Dropdown>
  );
};

export default Example;
