/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import {
  Alert as GardenAlert,
  IAlertProps as IGardenAlertProps,
  Title
} from '@zendeskgarden/react-notifications';

const StyledAlert = styled(GardenAlert)`
  margin-bottom: ${p => p.theme.space.xl};
`;

interface IAlertProps extends IGardenAlertProps {
  title: string;
}

export const Alert = ({ children, title, ...props }: IAlertProps) => (
  <StyledAlert {...props}>
    {title && <Title>{title}</Title>}
    {children}
  </StyledAlert>
);
