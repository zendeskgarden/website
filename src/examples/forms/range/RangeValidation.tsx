/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Range, Message } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const valType: Record<number, any> = {
  0: {
    validation: 'success',
    message: 'Growing all the time'
  },
  1: {
    validation: 'warning',
    message: 'Growing reguarly'
  },
  2: {
    validation: 'error',
    message: 'Growing slowly'
  }
};

const Example = () => {
  const [rangeValue, setRangeValue] = useState(1);

  return (
    <Row>
      <Col>
        <Field>
          <Label>Flowers</Label>
          <Range
            min={0}
            aria-valuemin={0}
            max={2}
            aria-valuemax={2}
            value={rangeValue}
            aria-valuenow={rangeValue}
            step={1}
            onChange={event => setRangeValue(parseInt(event.target.value, 10))}
          />
          <Message validation={valType[rangeValue].validation}>
            {valType[rangeValue].message}
          </Message>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
