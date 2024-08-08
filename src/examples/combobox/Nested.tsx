/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Field,
  IComboboxProps,
  IOptGroupProps,
  IOptionProps,
  OptGroup,
  Option
} from '@zendeskgarden/react-dropdowns';

interface IOption extends IOptionProps {
  value: string;
}

interface IOptGroup extends IOptGroupProps {
  options: IOption[];
}

type Options = (IOption | IOptGroup)[];

const OPTIONS: Options = [
  {
    value: 'Apple'
  },
  {
    value: 'Berry',
    type: 'next'
  },
  {
    value: 'Orange'
  }
];

const SUB_OPTIONS: Options = [
  {
    value: 'Fruits',
    type: 'previous'
  },
  {
    'aria-label': 'Berries',
    options: [
      {
        value: 'Strawberry'
      },
      {
        value: 'Loganberry'
      },
      {
        value: 'Boysenberry'
      }
    ]
  }
];

const Example = () => {
  const [options, setOptions] = useState(OPTIONS);
  const [state, setState] = useState<{
    inputValue: NonNullable<IComboboxProps['inputValue']>;
    isExpanded: NonNullable<IComboboxProps['isExpanded']>;
    selectionValue: NonNullable<IComboboxProps['selectionValue']> | null;
  }>({
    inputValue: '',
    isExpanded: false,
    selectionValue: null
  });

  const handleChange: IComboboxProps['onChange'] = changes => {
    if (changes.selectionValue === 'Berry') {
      setOptions(SUB_OPTIONS);
    } else if (changes.selectionValue === 'Fruits') {
      setOptions(OPTIONS);
    } else {
      setState({
        inputValue: changes.inputValue || state.inputValue,
        isExpanded: changes.isExpanded === undefined ? state.isExpanded : changes.isExpanded,
        selectionValue:
          changes.selectionValue === undefined ? state.selectionValue : changes.selectionValue
      });
    }
  };

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Fruit</Field.Label>
          <Combobox isEditable={false} onChange={handleChange} {...state}>
            {options.map((option, index) =>
              'options' in option ? (
                <OptGroup key={index} aria-label={option['aria-label']}>
                  {option.options.map(subOption => (
                    <Option key={subOption.value} {...subOption} />
                  ))}
                </OptGroup>
              ) : (
                <Option key={option.value} {...option} />
              )
            )}
          </Combobox>
        </Field>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
