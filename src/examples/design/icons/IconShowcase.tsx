/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { getColorV8 } from '@zendeskgarden/react-theming';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as LightBulbIcon } from '@zendeskgarden/svg-icons/src/16/lightbulb-stroke.svg';
import { ReactComponent as LightningBoltIcon } from '@zendeskgarden/svg-icons/src/16/lightning-bolt-stroke.svg';
import { ReactComponent as LocationIcon } from '@zendeskgarden/svg-icons/src/16/location-stroke.svg';
import { ReactComponent as SmileyIcon } from '@zendeskgarden/svg-icons/src/16/smiley-stroke.svg';

const StyledCol = styled(Col)`
  text-align: center;
  color: ${p => getColorV8('neutralHue', 600, p.theme)};
`;

const Example = () => (
  <Row alignItems="center" justifyContent="center" style={{ minHeight: '5em' }}>
    <StyledCol xs md={1}>
      <LeafIcon />
    </StyledCol>
    <StyledCol xs md={1}>
      <LightBulbIcon />
    </StyledCol>
    <StyledCol xs md={1}>
      <LightningBoltIcon />
    </StyledCol>
    <StyledCol xs md={1}>
      <LocationIcon />
    </StyledCol>
    <StyledCol xs md={1}>
      <SmileyIcon />
    </StyledCol>
  </Row>
);

export default Example;
