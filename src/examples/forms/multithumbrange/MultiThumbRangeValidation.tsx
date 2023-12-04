/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useCallback, useMemo } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Field, IMultiThumbRangeProps, Label, Message, MultiThumbRange } from '@zendeskgarden/react-forms';

type validationTypes = 'success' | 'warning' | 'error';

const Example = () => {
  const [minVal, setMinVal] = useState<number>();
  const [maxVal, setMaxVal] = useState<number>();
  const [validation, setValidation] = useState<validationTypes>('success');

  const validationMessage = useMemo(() => {
    if (validation === 'success') {
      return 'Growing all the time';
    } else if (validation === 'warning') {
      return 'Growing regularly';
    }

    return 'Growing slowly';
  }, [validation]);

  const onChange = useCallback<NonNullable<IMultiThumbRangeProps['onChange']>>(({ minValue, maxValue }) => {
    setMinVal(minValue);
    setMaxVal(maxValue);

    if (minValue !== undefined && maxValue !== undefined) {
      const result = maxValue - minValue;

      if (result >= 70) {
        setValidation('success');
      } else if (result >= 30) {
        setValidation('warning');
      } else {
        setValidation('error');
      }
    }
  }, []);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Flowers</Label>
          <MultiThumbRange minValue={minVal} maxValue={maxVal} onChange={onChange} />
          <Message validation={validation}>{validationMessage}</Message>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
