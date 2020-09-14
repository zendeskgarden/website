/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Datepicker } from '@zendeskgarden/react-datepickers';
import { Field, Label, Input, Message } from '@zendeskgarden/react-forms';
import { isBefore, isAfter, subDays, addDays } from 'date-fns';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [value, setValue] = useState(new Date());
  const minValue = new Date();
  const maxValue = addDays(new Date(), 7);

  const isInvalid = () => {
    return isBefore(value, subDays(minValue, 1)) || isAfter(value, maxValue);
  };

  return (
    <Row justifyContent="center">
      <Col sm={6}>
        <Field>
          <Label>Select a date</Label>
          <Datepicker value={value} onChange={setValue} minValue={minValue} maxValue={maxValue}>
            <Input validation={isInvalid() ? 'error' : undefined} />
          </Datepicker>
          {isInvalid() && (
            <Message validation="error" style={{ marginTop: '8px' }}>
              You must choose a date within the next 7 days.
            </Message>
          )}
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
