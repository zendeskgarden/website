/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Notification, ToastProvider, useToast } from '@zendeskgarden/react-notifications';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const StyledRow = styled(Grid.Row)`
  & + & {
    margin-top: ${p => p.theme.space.md};
  }
`;

const Toasts = () => {
  const { addToast } = useToast();

  const handleClick = useCallback(
    (placement: 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end') => {
      return () => {
        addToast(
          ({ close }) => (
            <Notification type="info" style={{ maxWidth: 450 }}>
              <Notification.Title>Info</Notification.Title>
              Turnip greens yarrow ricebean cauliflower sea lettuce kohlrabi amaranth water
              <Notification.Close aria-label="Close" onClick={close} />
            </Notification>
          ),
          { placement }
        );
      };
    },
    [addToast]
  );

  return (
    <>
      <StyledRow>
        <Grid.Col size="4">
          <Button onClick={handleClick('top-start')} isStretched>
            top-start
          </Button>
        </Grid.Col>
        <Grid.Col size="4">
          <Button onClick={handleClick('top')} isStretched>
            top
          </Button>
        </Grid.Col>
        <Grid.Col size="4">
          <Button onClick={handleClick('top-end')} isStretched>
            top-end
          </Button>
        </Grid.Col>
      </StyledRow>
      <StyledRow>
        <Grid.Col size="4">
          <Button onClick={handleClick('bottom-start')} isStretched>
            bottom-start
          </Button>
        </Grid.Col>
        <Grid.Col size="4">
          <Button onClick={handleClick('bottom')} isStretched>
            bottom
          </Button>
        </Grid.Col>
        <Grid.Col size="4">
          <Button onClick={handleClick('bottom-end')} isStretched>
            bottom-end
          </Button>
        </Grid.Col>
      </StyledRow>
    </>
  );
};

const topProps = {
  style: { top: DEFAULT_THEME.space.base * 3 }
} as HTMLAttributes<HTMLDivElement>;
const bottomProps = {
  style: { bottom: DEFAULT_THEME.space.base * 3 }
} as HTMLAttributes<HTMLDivElement>;
const placementProps = {
  'top-start': topProps,
  top: topProps,
  'top-end': topProps,
  'bottom-start': bottomProps,
  bottom: bottomProps,
  'bottom-end': bottomProps
};

const Example = () => (
  <ToastProvider placementProps={placementProps} zIndex={1}>
    <Toasts />
  </ToastProvider>
);

export default Example;
