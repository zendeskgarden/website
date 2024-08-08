/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Field, InputGroup, Input } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { Menu, Item, ISelectedItem, ItemGroup } from '@zendeskgarden/react-dropdowns';
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

      if (selectedItems?.[0]) {
        setSelectedItem(selectedItems[0]);
      }
    },
    []
  );

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Plant name generator</Field.Label>
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
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
