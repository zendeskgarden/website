/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Sheet } from '@zendeskgarden/react-chrome';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Anchor, Button } from '@zendeskgarden/react-buttons';

const surroundingBorder = '1px dotted gray';
const surroundingBorderStyle = {
  borderRight: surroundingBorder,
  borderTop: surroundingBorder,
  borderBottom: surroundingBorder
};

const Example = () => (
  <Grid gutters="sm">
    <Row style={{ height: '525px' }}>
      <Col size={4}>
        <Sheet isOpen size="100%" style={surroundingBorderStyle}>
          <Sheet.Close />
        </Sheet>
      </Col>

      <Col size={4}>
        <Sheet isOpen size="100%" style={surroundingBorderStyle}>
          {/* div element below emulates Sheet.Body in its absence */}
          <div style={{ flexGrow: 1 }} />

          <Sheet.Footer isCompact>
            <Sheet.FooterItem>
              <Anchor>Anchor</Anchor>
            </Sheet.FooterItem>
          </Sheet.Footer>

          <Sheet.Close />
        </Sheet>
      </Col>

      <Col size={4}>
        <Sheet isOpen size="100%" style={surroundingBorderStyle}>
          {/* div element below emulates Sheet.Body in its absence */}
          <div style={{ flexGrow: 1 }} />

          <Sheet.Footer>
            {/* margin-left was set to 0 due to column width wrapping the two buttons */}
            <Sheet.FooterItem style={{ marginLeft: '0' }}>
              <Button>Action</Button>
            </Sheet.FooterItem>
            <Sheet.FooterItem>
              <Button isPrimary>Close</Button>
            </Sheet.FooterItem>
          </Sheet.Footer>

          <Sheet.Close />
        </Sheet>
      </Col>
    </Row>
  </Grid>
);

export default Example;
