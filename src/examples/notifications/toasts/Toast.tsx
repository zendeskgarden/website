/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import {
  Notification,
  Title,
  Close,
  ToastProvider,
  useToast
} from '@zendeskgarden/react-notifications';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const Toasts = () => {
  const { addToast } = useToast();

  const handleClick = useCallback(
    (type: 'success' | 'warning' | 'info' | 'error') => {
      return () => {
        addToast(
          ({ close }) => (
            <Notification type={type} style={{ maxWidth: 450 }}>
              <Title>{type.charAt(0).toUpperCase() + type.slice(1)} toast</Title>
              Turnip greens yarrow ricebean cauliflower sea lettuce kohlrabi amaranth water
              <Close aria-label="Close toast" onClick={close} />
            </Notification>
          ),
          { placement: 'top-end', autoDismiss: type === 'error' ? false : 5000 }
        );
      };
    },
    [addToast]
  );

  return (
    <Grid>
      <Row>
        <Col>
          <Button onClick={handleClick('info')} isStretched>
            Info toast
          </Button>
        </Col>
        <Col>
          <Button onClick={handleClick('success')} isStretched>
            Success toast
          </Button>
        </Col>
        <Col>
          <Button onClick={handleClick('warning')} isStretched>
            Warning toast
          </Button>
        </Col>
        <Col>
          <Button onClick={handleClick('error')} isStretched>
            Error toast
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

const Example = () => (
  <ToastProvider zIndex={100}>
    <Toasts />
  </ToastProvider>
);

export default Example;
