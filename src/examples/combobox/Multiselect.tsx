/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { Col, Row } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Field,
  Hint,
  IComboboxProps,
  Label,
  Option
} from '@zendeskgarden/react-dropdowns.next';

const OPTIONS = [
  'Asparagus',
  'Broccoli',
  'Brussel sprouts',
  'Cauliflower',
  'Garlic',
  'Jerusalem artichoke',
  'Kale',
  'Lettuce',
  'Mushroom',
  'Onion',
  'Potato',
  'Radish',
  'Spinach',
  'Tomato',
  'Yam',
  'Zucchini'
];

const Example = () => {
  const [options, setOptions] = useState(OPTIONS);

  const handleChange: IComboboxProps['onChange'] = useCallback(({ inputValue }) => {
    if (inputValue !== undefined) {
      if (inputValue === '') {
        setOptions(OPTIONS);
      } else {
        const regex = new RegExp(inputValue.replace(/[.*+?^${}()|[\]\\]/giu, '\\$&'), 'giu');

        setOptions(OPTIONS.filter(option => option.match(regex)));
      }
    }
  }, []);

  const debounceHandleChange = useMemo(() => debounce(handleChange, 300), [handleChange]);

  useEffect(() => {
    return () => debounceHandleChange.cancel();
  }, [debounceHandleChange]);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Seeds</Label>
          <Hint>Plan your vegetable garden</Hint>
          <Combobox
            isAutocomplete
            isMultiselectable
            maxHeight="auto"
            onChange={debounceHandleChange}
          >
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
