/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => {
  const [active, setActive] = useState<boolean | undefined>();

  const handleChange = ({ isExpanded, value }: { isExpanded?: boolean; value?: string }) => {
    if (isExpanded !== undefined) {
      setActive(isExpanded);
    }

    value && alert(`You chose ${value}`);
  };

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu
          button={props => (
            <Button {...props} isPrimary={active}>
              <Button.StartIcon>
                <LeafIcon />
              </Button.StartIcon>
              Pick flowers
            </Button>
          )}
          onChange={handleChange}
        >
          <Item value="hydrangea">Hydrangea</Item>
          <Item value="petunia">Petunia</Item>
          <Item value="lily">Lily</Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
