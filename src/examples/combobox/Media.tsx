/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Combobox, Field, Label, Option } from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Veggies</Label>
        <Combobox
          startIcon={<SearchIcon />}
          endIcon={<LeafIcon />}
          renderValue={({ selection }) =>
            selection && !Array.isArray(selection) && typeof selection.value === 'string'
              ? `${selection.value} ${
                  {
                    Broccoli: '🥦',
                    Carrots: '🥕',
                    Cucumbers: '🥒',
                    Lettuce: '🥬',
                    Onions: '🧅',
                    Peas: '🫛',
                    Peppers: '🫑',
                    Tomatoes: '🍅'
                  }[selection.value]
                }`
              : undefined
          }
        >
          <Option icon={<LeafIcon />} value="Broccoli">
            Broccoli 🥦
          </Option>
          <Option icon={<LeafIcon />} value="Carrots">
            Carrots 🥕
          </Option>
          <Option icon={<LeafIcon />} value="Cucumbers">
            Cucumbers 🥒
          </Option>
          <Option icon={<LeafIcon />} value="Lettuce" isSelected>
            Lettuce 🥬
          </Option>
          <Option icon={<LeafIcon />} value="Onions">
            Onions 🧅
          </Option>
          <Option icon={<LeafIcon />} value="Peas">
            Peas 🫛
          </Option>
          <Option icon={<LeafIcon />} value="Peppers">
            Peppers 🫑
          </Option>
          <Option icon={<LeafIcon />} value="Tomatoes">
            Tomatoes 🍅
          </Option>
        </Combobox>
      </Field>
    </Col>
  </Row>
);

export default Example;
