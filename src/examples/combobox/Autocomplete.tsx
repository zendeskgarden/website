/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Field,
  IComboboxProps,
  Label,
  Option
} from '@zendeskgarden/react-dropdowns.next';

const OPTIONS = [
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
  const [options, setOptions] = useState(OPTIONS);

  const handleChange: IComboboxProps['onChange'] = ({ inputValue }) => {
    if (inputValue !== undefined) {
      if (inputValue === '') {
        setOptions(OPTIONS);
      } else {
        const regex = new RegExp(inputValue.replace(/[.*+?^${}()|[\]\\]/giu, '\\$&'), 'giu');

        setOptions(options.filter(option => option.match(regex)));
      }
    }
  };

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Choose a vegetable</Label>
          <Combobox isAutocomplete onChange={handleChange}>
            {options.length === 0 ? (
              <Option isDisabled label="" value="No matches found" />
            ) : (
              options.map(value => <Option key={value} value={value} />)
            )}
          </Combobox>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
