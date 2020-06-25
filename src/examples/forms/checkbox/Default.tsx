/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Checkbox } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [annual, setAnnual] = useState(true);
  const [perennial, setPerennial] = useState(false);

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <Field>
          <Checkbox checked={annual} onChange={() => setAnnual(!annual)}>
            <Label>Annual</Label>
          </Checkbox>
        </Field>
        <Field>
          <Checkbox checked={perennial} onChange={() => setPerennial(!perennial)}>
            <Label>Perennial</Label>
          </Checkbox>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
