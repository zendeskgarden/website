/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Range, Hint } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [rangeValue, setRangeValue] = useState('50');

  return (
    <Row>
      <Col>
        <Field>
          <Label>Flowers</Label>
          <Hint>Plant {rangeValue} flowers</Hint>
          <Range step={10} onChange={e => setRangeValue(e.target.value)} />
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
