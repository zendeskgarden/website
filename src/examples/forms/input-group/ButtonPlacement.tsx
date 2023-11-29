/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Field, Label, InputGroup, Input } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Menu, Item, ISelectedItem, ItemGroup } from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as ChevronDownStroke } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const StyledInputGroup = styled(InputGroup)`
  /* stylelint-disable-next-line */
  & > input[aria-autocomplete='list'] {
    position: absolute;
  }
`;

const Example = () => {
  const [selectedItem, setSelectedItem] = useState<ISelectedItem>({
    value: 'Herb',
    name: 'flower',
    type: 'radio'
  });
  const [rotated, setRotated] = useState(false);

  const handleChange = useCallback(
    ({ isExpanded, selectedItems }: { isExpanded?: boolean; selectedItems?: ISelectedItem[] }) => {
      if (isExpanded !== undefined) {
        setRotated(isExpanded);
      }

      if (selectedItems !== undefined && selectedItems[0]) {
        setSelectedItem(selectedItems[0]);
      }
    },
    []
  );

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Plant name generator</Label>
          <StyledInputGroup>
            <Menu
              button={props => (
                <Button {...props} focusInset isNeutral>
                  {selectedItem.value}
                  <Button.EndIcon isRotated={rotated}>
                    <ChevronDownStroke />
                  </Button.EndIcon>
                </Button>
              )}
              selectedItems={[selectedItem]}
              onChange={handleChange}
            >
              <ItemGroup type="radio" legend="Choose a type">
                <Item value="Plant" name="flower" />
                <Item value="Herb" name="flower" />
                <Item value="Flower" name="flower" />
              </ItemGroup>
            </Menu>
            <Input defaultValue="Bergamot" />
          </StyledInputGroup>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
