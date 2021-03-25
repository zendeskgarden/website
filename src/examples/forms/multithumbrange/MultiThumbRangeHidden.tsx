/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, MultiThumbRange } from '@zendeskgarden/react-forms';

const Example = () => {
  const [minVal, setMinVal] = useState<number>();
  const [maxVal, setMaxVal] = useState<number>();

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label hidden>Accessibly hidden label</Label>
          <MultiThumbRange
            minValue={minVal}
            maxValue={maxVal}
            onChange={({ minValue, maxValue }) => {
              setMinVal(minValue);
              setMaxVal(maxValue);
            }}
          />
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
