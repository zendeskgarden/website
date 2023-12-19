/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns.next';

const Example = () => {
  const [rotated, setRotated] = useState<boolean>();

  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    changes.isExpanded !== undefined && setRotated(changes.isExpanded);
  }, []);

  return (
    <Row>
      <Col textAlign="center">
        <SplitButton>
          <Button>Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton {...props} aria-label="other actions" isRotated={rotated} />
            )}
            onChange={handleChange}
            placement="bottom-end"
          >
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </SplitButton>
      </Col>
    </Row>
  );
};

export default Example;
