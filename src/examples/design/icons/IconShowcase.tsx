/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as LightBulbIcon } from '@zendeskgarden/svg-icons/src/16/lightbulb-stroke.svg';
import { ReactComponent as LightningBoltIcon } from '@zendeskgarden/svg-icons/src/16/lightning-bolt-stroke.svg';
import { ReactComponent as LocationIcon } from '@zendeskgarden/svg-icons/src/16/location-stroke.svg';
import { ReactComponent as SmileyIcon } from '@zendeskgarden/svg-icons/src/16/smiley-stroke.svg';

const ICON_FILL = DEFAULT_THEME.palette.grey[600];

const Example = () => (
  <Grid>
    <Row alignItems="center" justifyContent="center" style={{ minHeight: '5em' }}>
      <Col size={1}>
        <LeafIcon color={ICON_FILL} style={{ width: '100%', margin: 'auto' }} />
      </Col>
      <Col size={1}>
        <LightBulbIcon color={ICON_FILL} style={{ width: '100%', margin: 'auto' }} />
      </Col>
      <Col size={1}>
        <LightningBoltIcon color={ICON_FILL} style={{ width: '100%', margin: 'auto' }} />
      </Col>
      <Col size={1}>
        <LocationIcon color={ICON_FILL} style={{ width: '100%', margin: 'auto' }} />
      </Col>
      <Col size={1}>
        <SmileyIcon color={ICON_FILL} style={{ width: '100%', margin: 'auto' }} />
      </Col>
    </Row>
  </Grid>
);

export default Example;
