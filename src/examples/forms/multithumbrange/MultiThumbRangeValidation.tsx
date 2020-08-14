/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useCallback } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Message, MultiThumbRange } from '@zendeskgarden/react-forms';

type validationTypes = 'success' | 'warning' | 'error';

const messages: Record<validationTypes, string> = {
  success: 'Growing all the time',
  warning: 'Growing regularly',
  error: 'Growing slowly'
};

const Example = () => {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const [validation, setValidation] = useState<validationTypes>('success');

  const onChange = useCallback(({ minValue, maxValue }) => {
    setMinVal(minValue);
    setMaxVal(maxValue);

    if (minValue <= 20) {
      setValidation('success');
    } else if (minValue > 20 && maxValue > 70) {
      setValidation('warning');
    } else {
      setValidation('error');
    }
  }, []);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Flowers</Label>
          <MultiThumbRange minValue={minVal} maxValue={maxVal} onChange={onChange} />
          <Message validation={validation}>{messages[validation]}</Message>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
