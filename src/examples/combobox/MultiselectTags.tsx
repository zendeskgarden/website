/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Combobox, Field, Label, Option, Tag } from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as AvatarIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const OPTIONS = [
  'Apple Martin',
  'Basil Rathbone',
  'Cherry Jones',
  'Daisy Bates',
  'Holly Berry',
  'Huckleberry Finn',
  'Ivy Poison',
  'Olive Borden',
  'Poppy Lee',
  'Rue McClanahan',
  'Sage Francis',
  'Willow Smith'
];

const Example = () => {
  const getTagProps = (option: string) => {
    const children = (
      <>
        <Tag.Avatar>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AvatarIcon />
          </span>
        </Tag.Avatar>{' '}
        {option}
      </>
    );

    return {
      'aria-label': 'Press delete or backspace to remove',
      children,
      isPill: true,
      removeLabel: 'Remove'
    };
  };

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Horticulturalists</Label>
          <Combobox isMultiselectable maxHeight="auto">
            {OPTIONS.map(option => (
              <Option
                key={option}
                icon={<AvatarIcon />}
                isSelected={option === 'Huckleberry Finn'}
                tagProps={getTagProps(option)}
                value={option}
              >
                {option.split(' ')[0]}
                <Option.Meta>{option.split(' ').slice(-1)[0]}</Option.Meta>
              </Option>
            ))}
          </Combobox>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
