/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { getColor } from '@zendeskgarden/react-theming';
import { Combobox, Field, Label, Option } from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import styled from 'styled-components';

const StyledEmoji = styled.span`
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  margin-top: -${p => p.theme.space.base / 2}px;
  border-radius: 50%;
  background-color: ${p => getColor({ theme: p.theme, hue: 'green', shade: 300 })};
  width: ${p => p.theme.space.base * 6}px;
  height: ${p => p.theme.space.base * 6}px;
`;

const StyledValue = styled.span`
  margin-${p => (p.theme.rtl ? 'right' : 'left')}: calc(${p => p.theme.space.base * 6}px + 0.25em);
`;

const OPTIONS: Record<string, string> = {
  Broccoli: '🥦',
  Carrots: '🥕',
  Cucumbers: '🥒',
  Lettuce: '🥬',
  Onions: '🧅',
  Peas: '🫛',
  Peppers: '🫑',
  Tomatoes: '🍅'
};

const Value = ({ children }: { children: string }) => (
  <>
    <StyledEmoji role="img" aria-label={children}>
      {OPTIONS[children]}
    </StyledEmoji>
    <StyledValue>{children}</StyledValue>
  </>
);

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Veggies</Label>
        <Combobox
          startIcon={<SearchIcon />}
          endIcon={<LeafIcon />}
          renderValue={({ selection }) =>
            selection && !Array.isArray(selection) && typeof selection.value === 'string' ? (
              <Value>{selection.value}</Value>
            ) : undefined
          }
        >
          {Object.keys(OPTIONS).map(option => (
            <Option key={option} value={option}>
              <Value>{option}</Value>
            </Option>
          ))}
        </Combobox>
      </Field>
    </Col>
  </Row>
);

export default Example;
