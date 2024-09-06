/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Col, Row } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Field,
  Hint,
  IComboboxProps,
  IOptGroupProps,
  IOptionProps,
  Label,
  OptGroup,
  Option,
  OptionValue
} from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as SelectionIcon } from '@zendeskgarden/svg-icons/src/16/record-stroke.svg';

interface IOption extends IOptionProps {
  value: string;
}
interface IOptGroup extends IOptGroupProps {
  options: IOption[];
}

type Options = (IOption | IOptGroup)[];

type SubOptions = Record<any, Options>;

const OPTIONS: Options = [
  {
    label: 'Classificiations',
    options: [
      { value: 'Alliums', type: 'next' },
      { value: 'Curcubits', type: 'next' },
      { value: 'Crucifers', type: 'next' },
      { value: 'Legumes', type: 'next' },
      { value: 'Solanaceae', type: 'next' },
      { value: 'Umbellifers', type: 'next' }
    ]
  }
];
const SUB_OPTIONS: SubOptions = {
  Alliums: [
    { value: 'Classifications', type: 'previous' },
    {
      'aria-label': 'Alliums',
      options: [{ value: 'Garlic' }, { value: 'Leek' }, { value: 'Onion' }]
    }
  ],
  Curcubits: [
    { value: 'Classifications', type: 'previous' },
    {
      'aria-label': 'Curcubits',
      options: [{ value: 'Cucumber' }, { value: 'Pumpkin' }, { value: 'Zucchini' }]
    }
  ],
  Crucifers: [
    { value: 'Classifications', type: 'previous' },
    {
      'aria-label': 'Crucifers',
      options: [{ value: 'Broccoli' }, { value: 'Cauliflower' }, { value: 'Kale' }]
    }
  ],
  Legumes: [
    { value: 'Classifications', type: 'previous' },
    {
      'aria-label': 'Legumes',
      options: [{ value: 'Bean' }, { value: 'Lentil' }, { value: 'Pea' }]
    }
  ],
  Solanaceae: [
    { value: 'Classifications', type: 'previous' },
    {
      'aria-label': 'Solanaceae',
      options: [{ value: 'Bell pepper' }, { value: 'Potato' }, { value: 'Tomato' }]
    }
  ],
  Umbellifers: [
    { value: 'Classifications', type: 'previous' },
    {
      'aria-label': 'Umbellifers',
      options: [{ value: 'Carrot' }, { value: 'Celery' }, { value: 'Parsnip' }]
    }
  ]
};

const Example = () => {
  const [options, setOptions] = useState(OPTIONS);
  const [state, setState] = useState<{
    activeIndex: NonNullable<IComboboxProps['activeIndex']>;
    inputValue: NonNullable<IComboboxProps['inputValue']>;
    isExpanded: NonNullable<IComboboxProps['isExpanded']>;
    selectionValue: OptionValue[];
  }>({
    activeIndex: -1,
    inputValue: '',
    isExpanded: false,
    selectionValue: []
  });

  const handleChange: IComboboxProps['onChange'] = changes => {
    const selectionValue = Array.isArray(changes.selectionValue) ? changes.selectionValue : [];
    const _state = {
      activeIndex: changes.activeIndex === undefined ? state.activeIndex : changes.activeIndex,
      inputValue: changes.inputValue || state.inputValue,
      isExpanded: changes.isExpanded === undefined ? state.isExpanded : changes.isExpanded,
      selectionValue: changes.selectionValue === undefined ? state.selectionValue : selectionValue
    };

    if (selectionValue) {
      const selectedValue = selectionValue.find(value => !state.selectionValue.includes(value));

      if (selectedValue in SUB_OPTIONS) {
        setOptions(SUB_OPTIONS[selectedValue]);
        _state.activeIndex = 1;
        _state.selectionValue = state.selectionValue;
      } else if (selectedValue === 'Classifications') {
        setOptions(OPTIONS);
        _state.selectionValue = state.selectionValue;
      }
    }

    setState(_state);
  };

  const theme = useTheme();

  const renderOptionIcon = useCallback(
    (value: string) => {
      let retVal;

      if (value in SUB_OPTIONS) {
        const option = SUB_OPTIONS[value].find(_option => 'options' in _option);

        if (option) {
          const values: OptionValue[] = option.options.map(subOption => subOption.value);

          if (state.selectionValue.some(selectionValue => values.includes(selectionValue))) {
            const color = getColor('neutralHue', 600, theme);

            retVal = (
              <SelectionIcon aria-label="Contains selection(s)" role="img" style={{ color }} />
            );
          }
        }
      }

      return retVal;
    },
    [state.selectionValue, theme]
  );

  const renderHiddenSelectedOptions = useCallback(() => {
    const values = options.reduce<OptionValue[]>((_values, option) => {
      if ('options' in option) {
        const subValues = option.options.map(subOption => subOption.value);

        _values.push(...subValues);
      }

      return _values;
    }, []);
    const missingValues = state.selectionValue.filter(value => !values.includes(value));

    return missingValues.map(value => <Option key={value as string} isHidden value={value} />);
  }, [options, state.selectionValue]);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Vegetables</Label>
          <Hint>Select your favorites</Hint>
          <Combobox isMultiselectable maxHeight="auto" onChange={handleChange} {...state}>
            {renderHiddenSelectedOptions()}
            {options.map((option, index) =>
              'options' in option ? (
                <OptGroup key={index} aria-label={option['aria-label']} label={option.label}>
                  {option.options.map(subOption => (
                    <Option
                      key={subOption.value}
                      icon={renderOptionIcon(subOption.value)}
                      {...subOption}
                    />
                  ))}
                </OptGroup>
              ) : (
                <Option key={option.value} icon={renderOptionIcon(option.value)} {...option} />
              )
            )}
          </Combobox>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
