/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Datepicker } from '@zendeskgarden/react-datepickers';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [state, setState] = useState(new Date());

  return (
    <Row justifyContent="center">
      <Col sm={6}>
        <Field>
          <Label>Select a date</Label>
          <Datepicker value={state} onChange={setState}>
            <Input />
          </Datepicker>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
