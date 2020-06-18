/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const StyledRow = styled(Row)`
  margin-top: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Row>
      <Col textAlign="center">
        <Button isStretched>Stretched</Button>
      </Col>
    </Row>
    <StyledRow>
      <Col textAlign="center">
        <Button isPrimary isStretched>
          Stretched
        </Button>
      </Col>
    </StyledRow>
  </>
);

export default Example;
