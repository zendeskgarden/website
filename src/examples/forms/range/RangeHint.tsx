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
  const [rangeValue, setRangeValue] = useState(150);

  return (
    <Row>
      <Col>
        <Field>
          <Label>Flowers</Label>
          <Hint>Plant {rangeValue} flowers</Hint>
          <Range
            min={0}
            aria-valuemin={0}
            max={300}
            aria-valuemax={300}
            value={rangeValue}
            aria-valuenow={rangeValue}
            step={10}
            onChange={event => setRangeValue(parseInt(event.target.value, 10))}
          />
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
