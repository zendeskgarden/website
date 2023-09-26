/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item, IItemProps } from '@zendeskgarden/react-dropdowns.next';
import { Separator } from '@zendeskgarden/react-dropdowns';

export const BASE_ITEMS: IItemProps[] = [
  { value: 'Orange' },
  { value: 'Berry', type: 'next' },
  { value: 'Apple' }
];

export const NESTED_ITEMS: IItemProps[] = [
  { value: 'Fruits', type: 'previous' },
  { value: 'separator' },
  { value: 'Strawberry' },
  { value: 'Loganberry' },
  { value: 'Boysenberry' }
];

const StyledHiddenText = styled.span(hideVisually);

const Example = () => {
  const [items, setItems] = useState(BASE_ITEMS);

  const handleChange = useCallback(({ type, isExpanded }) => {
    const isNext = type.includes('next');
    const isPrev = type.includes('previous');

    if (isNext || isPrev) {
      setItems(isNext ? NESTED_ITEMS : BASE_ITEMS);
    } else if (isExpanded === false) {
      setItems(BASE_ITEMS);
    }
  }, []);

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu button="Menu" onChange={handleChange}>
          {items.map(item =>
            item.value === 'separator' ? (
              <Separator key={item.value} />
            ) : (
              <Item key={item.value} {...item}>
                {item.value}
                {item.type === 'next' && <StyledHiddenText>Go to submenu</StyledHiddenText>}
                {item.type === 'previous' && (
                  <StyledHiddenText>Go to previous menu</StyledHiddenText>
                )}
              </Item>
            )
          )}
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
