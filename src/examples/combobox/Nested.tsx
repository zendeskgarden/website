/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useEffect, useState } from 'react';
import { Span } from '@zendeskgarden/react-typography';
import { Grid } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Field,
  IComboboxProps,
  IOptGroupProps,
  IOptionProps,
  OptGroup,
  Option,
  OptionValue
} from '@zendeskgarden/react-dropdowns';

interface IOptGroup extends IOptGroupProps {
  options: IOptionProps[];
}

type Options = (IOptionProps | IOptGroup)[];

type SubOptions = Record<OptionValue, Options>;

const OPTIONS: Options = [
  { value: 'Apple' },
  { value: 'Berry', type: 'next' },
  { value: 'Orange' }
];

const SUB_OPTIONS: SubOptions = {
  Berry: [
    { value: 'Fruits', type: 'previous' },
    {
      'aria-label': 'Berries',
      options: [{ value: 'Strawberry' }, { value: 'Loganberry' }, { value: 'Boysenberry' }]
    }
  ]
};

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
    const selectionValue = changes.selectionValue as OptionValue;

    if (selectionValue in SUB_OPTIONS) {
      setOptions(SUB_OPTIONS[selectionValue]);
    } else if (selectionValue === 'Fruits') {
      setOptions(OPTIONS);
    } else {
      setState({
        inputValue: changes.inputValue || state.inputValue,
        isExpanded: changes.isExpanded === undefined ? state.isExpanded : changes.isExpanded,
        selectionValue: selectionValue === undefined ? state.selectionValue : selectionValue
      });
    }
  };

  const hasSelection = useCallback(
    (value: OptionValue) => {
      let retVal = false;

      if (value in SUB_OPTIONS) {
        const option = SUB_OPTIONS[value].find(_option => 'options' in _option);

        if (option) {
          const values: OptionValue[] = option.options.map(subOption => subOption.value);

          if (values.includes(state.selectionValue as OptionValue)) {
            retVal = true;
          }
        }
      }

      return retVal;
    },
    [state.selectionValue]
  );

  const renderHiddenSelectedOption = useCallback(() => {
    const selectionValue = state.selectionValue as OptionValue;

    if (selectionValue !== null) {
      const values = options.reduce<OptionValue[]>((_values, option) => {
        if ('options' in option) {
          const subValues = option.options.map(subOption => subOption.value);

          _values.push(...subValues);
        } else {
          _values.push(option.value);
        }

        return _values;
      }, []);

      if (!values.includes(selectionValue)) {
        return <Option isHidden value={selectionValue} />;
      }
    }

    return null;
  }, [options, state.selectionValue]);

  useEffect(() => {
    // Reset options on listbox collapse
    let timeout: NodeJS.Timeout;

    if (!state.isExpanded) {
      timeout = setTimeout(() => {
        setOptions(OPTIONS);
      }, 200 /* match listbox opacity transition */);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [state.isExpanded]);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Fruit</Field.Label>
          <Combobox isEditable={false} onChange={handleChange} {...state}>
            {renderHiddenSelectedOption()}
            {options.map((option, index) =>
              'options' in option ? (
                <OptGroup key={index} aria-label={option['aria-label']}>
                  {option.options.map(subOption => (
                    <Option
                      key={subOption.value}
                      hasSelection={hasSelection(subOption.value)}
                      {...subOption}
                    >
                      {subOption.value}
                      {hasSelection(subOption.value) && (
                        <Span hidden>&nbsp;(contains selected option)</Span>
                      )}
                    </Option>
                  ))}
                </OptGroup>
              ) : (
                <Option key={option.value} hasSelection={hasSelection(option.value)} {...option}>
                  {option.value}
                  {hasSelection(option.value) && (
                    <Span hidden>&nbsp;(contains selected option)</Span>
                  )}
                </Option>
              )
            )}
          </Combobox>
        </Field>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
