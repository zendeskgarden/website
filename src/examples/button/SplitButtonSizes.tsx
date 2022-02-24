/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => {
  const [smallRotated, setSmallRotated] = useState<boolean>();
  const [mediumRotated, setMediumRotated] = useState<boolean>();
  const [largeRotated, setLargeRotated] = useState<boolean>();

  return (
    <Row alignItems="center">
      <Col textAlign="center" sm>
        <SplitButton>
          <Button size="small">Harvest</Button>
          <Dropdown
            onStateChange={options =>
              Object.hasOwn(options, 'isOpen') && setSmallRotated(options.isOpen)
            }
          >
            <Trigger>
              <ChevronButton aria-label="other actions" size="small" isRotated={smallRotated} />
            </Trigger>
            <Menu placement="bottom-end">
              <Item value="prune">Prune</Item>
              <Item value="water">Water</Item>
              <Item value="fertilize">Fertilize</Item>
            </Menu>
          </Dropdown>
        </SplitButton>
      </Col>
      <StyledCol textAlign="center" sm>
        <SplitButton>
          <Button size="medium">Harvest</Button>
          <Dropdown
            onStateChange={options =>
              Object.hasOwn(options, 'isOpen') && setMediumRotated(options.isOpen)
            }
          >
            <Trigger>
              <ChevronButton aria-label="other actions" size="medium" isRotated={mediumRotated} />
            </Trigger>
            <Menu placement="bottom-end">
              <Item value="prune">Prune</Item>
              <Item value="water">Water</Item>
              <Item value="fertilize">Fertilize</Item>
            </Menu>
          </Dropdown>
        </SplitButton>
      </StyledCol>
      <StyledCol textAlign="center" sm>
        <SplitButton>
          <Button size="large">Harvest</Button>
          <Dropdown
            onStateChange={options =>
              Object.hasOwn(options, 'isOpen') && setLargeRotated(options.isOpen)
            }
          >
            <Trigger>
              <ChevronButton aria-label="other actions" size="large" isRotated={largeRotated} />
            </Trigger>
            <Menu placement="bottom-end">
              <Item value="prune">Prune</Item>
              <Item value="water">Water</Item>
              <Item value="fertilize">Fertilize</Item>
            </Menu>
          </Dropdown>
        </SplitButton>
      </StyledCol>
    </Row>
  );
};

export default Example;
