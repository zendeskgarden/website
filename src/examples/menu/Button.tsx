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
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const Example = () => {
  const [rotated, setRotated] = useState<boolean | undefined>();

  const handleChange = ({ isExpanded, value }: { isExpanded?: boolean; value?: string }) => {
    if (isExpanded !== undefined) {
      setRotated(isExpanded);
    }

    value && alert(`You chose ${value}`);
  };

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu
          button={props => (
            <Button {...props} isBasic>
              Pick flowers
              <Button.EndIcon isRotated={rotated}>
                <ChevronIcon />
              </Button.EndIcon>
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
