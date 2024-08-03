/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Item, Menu, Label, Field, Dropdown, Combobox } from '@zendeskgarden/react-dropdowns';
import { Grid } from '@zendeskgarden/react-grid';
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
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState<string[]>([]);

  /**
   * Debounce filtering
   */
  const filterMatchingOptions = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length > 0) {
          const valueRegexp = new RegExp(value!, 'gui');

          setMatchingOptions(options.filter(option => option.match(valueRegexp)) || []);
        } else {
          setMatchingOptions([]);
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

  const renderOptions = () => {
    if (isLoading) {
      return <Item disabled>Loading items...</Item>;
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
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Dropdown
          inputValue={inputValue}
          onSelect={item => setInputValue(item)}
          onInputValueChange={value => setInputValue(value)}
        >
          <Field>
            <Label hidden>Accessibly hidden label</Label>
            <Combobox start={<SearchIcon />} placeholder="Search vegetables" />
          </Field>
          <Menu>{renderOptions()}</Menu>
        </Dropdown>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
