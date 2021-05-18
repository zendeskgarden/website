/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, Label, InputGroup, Input } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';
import { ReactComponent as ChevronDownStroke } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const StyledInputGroup = styled(InputGroup)`
  /* stylelint-disable-next-line */
  & > input[aria-autocomplete='list'] {
    position: absolute;
  }
`;

const Example = () => {
  const [selectedItem, setSelectedItem] = useState('Herb');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Plant name generator</Label>
          <StyledInputGroup>
            <Dropdown
              isOpen={isOpen}
              selectedItem={selectedItem}
              onSelect={item => setSelectedItem(item)}
              onStateChange={state => {
                if (state.isOpen !== undefined) {
                  setIsOpen(state.isOpen);
                }
              }}
            >
              <Trigger>
                <Button focusInset isNeutral>
                  {selectedItem}
                  <Button.EndIcon isRotated={isOpen}>
                    <ChevronDownStroke />
                  </Button.EndIcon>
                </Button>
              </Trigger>
              <Menu>
                <Item value="Plant">Plant</Item>
                <Item value="Herb">Herb</Item>
                <Item value="Flower">Flower</Item>
              </Menu>
            </Dropdown>
            <Input defaultValue="Bergamot" />
          </StyledInputGroup>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
