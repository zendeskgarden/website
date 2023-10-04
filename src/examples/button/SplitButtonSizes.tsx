/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => {
  const [smallRotated, setSmallRotated] = useState<boolean>();
  const [mediumRotated, setMediumRotated] = useState<boolean>();
  const [largeRotated, setLargeRotated] = useState<boolean>();

  const handleSmallChange = useCallback(
    changes => changes.isExpanded !== undefined && setSmallRotated(changes.isExpanded),
    []
  );

  const handleMediumChange = useCallback(
    changes => changes.isExpanded !== undefined && setMediumRotated(changes.isExpanded),
    []
  );

  const handleLargeChange = useCallback(
    changes => changes.isExpanded !== undefined && setLargeRotated(changes.isExpanded),
    []
  );

  return (
    <Row alignItems="center">
      <Col textAlign="center" sm>
        <SplitButton>
          <Button size="small">Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton
                {...props}
                aria-label="other actions"
                size="small"
                isRotated={smallRotated}
              />
            )}
            onChange={handleSmallChange}
            placement="bottom-end"
            zIndex={10000}
          >
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </SplitButton>
      </Col>
      <StyledCol textAlign="center" sm>
        <SplitButton>
          <Button size="medium">Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton
                {...props}
                aria-label="other actions"
                size="medium"
                isRotated={mediumRotated}
              />
            )}
            onChange={handleMediumChange}
            placement="bottom-end"
            zIndex={10000}
          >
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </SplitButton>
      </StyledCol>
      <StyledCol textAlign="center" sm>
        <SplitButton>
          <Button size="large">Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton
                {...props}
                aria-label="other actions"
                size="large"
                isRotated={largeRotated}
              />
            )}
            onChange={handleLargeChange}
            placement="bottom-end"
            zIndex={10000}
          >
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </SplitButton>
      </StyledCol>
    </Row>
  );
};

export default Example;
