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
import { Row, Col } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { Dots } from '@zendeskgarden/react-loaders';

const StyledCol = styled(Col)`
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
  const [isLoading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [compactSelectedItem, setCompactSelectedItem] = useState('');
  const [compactInputValue, setCompactInputValue] = useState('');
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
        setLoading(false);
      }, 750),
    []
  );

  useEffect(() => {
    if (inputValue) {
      setLoading(true);
    }

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
            <Label>Default</Label>
            <Hint>Choose a vegetable</Hint>
            <Combobox
              start={<SearchIcon />}
              end={isLoading ? <Dots delayMS={0} /> : null}
              placeholder="Search vegetables"
            >
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
      <StyledCol sm={5}>
        <Dropdown
          inputValue={compactInputValue}
          selectedItem={compactSelectedItem}
          onSelect={item => setCompactSelectedItem(item)}
          onInputValueChange={value => setCompactInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label>Compact</Label>
            <Hint>Choose a vegetable</Hint>
            <Combobox
              isCompact
              start={<SearchIcon />}
              end={isLoading ? <Dots delayMS={0} /> : null}
              placeholder="Search vegetables"
            >
              {compactSelectedItem}
            </Combobox>
          </Field>
          <Menu isCompact>
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
      </StyledCol>
    </Row>
  );
};

export default Example;
