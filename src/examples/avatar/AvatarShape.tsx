/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as UserStrokeIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const StyledCol = styled(Col)`
  margin-bottom: ${p => p.theme.space.sm};
  text-align: center;
`;

const Example = () => {
  return (
    <Grid>
      <Row alignItems="center">
        <StyledCol>
          <Avatar backgroundColor={DEFAULT_THEME.palette.grey[600]} size="medium">
            <UserStrokeIcon role="img" aria-label="User" />
          </Avatar>
        </StyledCol>
        <StyledCol>
          <Avatar backgroundColor={DEFAULT_THEME.palette.kale[700]} size="medium" isSystem>
            <ZendeskIcon role="img" aria-label="Zendesk" />
          </Avatar>
        </StyledCol>
      </Row>
    </Grid>
  );
};

export default Example;
