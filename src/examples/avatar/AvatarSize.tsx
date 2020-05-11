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
import { ReactComponent as UserStrokeIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const StyledCol = styled(Col)`
  margin-bottom: ${p => p.theme.space.sm};
  text-align: center;
`;

const Example = () => {
  const iconColor = DEFAULT_THEME.palette.grey[600];

  return (
    <Grid>
      <Row alignItems="center">
        <StyledCol>
          <Avatar backgroundColor={iconColor} size="extraextrasmall">
            <UserStrokeIcon role="img" aria-label="extra extra small user avatar" />
          </Avatar>
        </StyledCol>
        <StyledCol>
          <Avatar backgroundColor={iconColor} size="extrasmall">
            <UserStrokeIcon role="img" aria-label="extra small user avatar" />
          </Avatar>
        </StyledCol>
        <StyledCol>
          <Avatar backgroundColor={iconColor} size="small">
            <UserStrokeIcon role="img" aria-label="small user avatar" />
          </Avatar>
        </StyledCol>
        <StyledCol>
          <Avatar backgroundColor={iconColor} size="medium">
            <UserStrokeIcon role="img" aria-label="medium user avatar" />
          </Avatar>
        </StyledCol>
        <StyledCol>
          <Avatar backgroundColor={iconColor} size="large">
            <UserStrokeIcon role="img" aria-label="large user avatar" />
          </Avatar>
        </StyledCol>
      </Row>
    </Grid>
  );
};

export default Example;
