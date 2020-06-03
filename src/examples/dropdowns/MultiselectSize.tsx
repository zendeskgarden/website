/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Dropdown,
  Multiselect,
  Field,
  Menu,
  Item,
  Hint,
  Label
} from '@zendeskgarden/react-dropdowns';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import debounce from 'lodash.debounce';
import { Tag } from '@zendeskgarden/react-tags';

const options = [
  'Asparagus',
  'Bean',
  'Brussel sprouts',
  'Cabbage',
  'Cauliflower',
  'Celery',
  'Cucumber',
  'Garlic',
  'Jerusalem artichoke',
  'Kale',
  'Lettuce',
  'Onion',
  'Mushroom',
  'Potato',
  'Pumpkin',
  'Radish',
  'Shallot',
  'Silverbeet',
  'Spinach',
  'Sweet Potato',
  'Tomato',
  'Yam',
  'Zucchini'
];

const Example = () => {
  const [selectedItems, setSelectedItems] = useState([
    options[0],
    options[1],
    options[2],
    options[3]
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
    <Grid>
      <Row justifyContent="center">
        <Col>
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
              <Label>Default</Label>
              <Hint>This example includes basic debounce logic</Hint>
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
        </Col>
        <Col>
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
              <Label>Compact</Label>
              <Hint>This example includes basic debounce logic</Hint>
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
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
