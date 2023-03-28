/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Checkbox, Fieldset } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [pest, setPest] = useState(true);
  const [light, setLight] = useState(false);
  const [drought, setDrought] = useState(false);

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <Fieldset>
          <Fieldset.Legend>Plant preference</Fieldset.Legend>
          <Field>
            <Checkbox checked={pest} onChange={() => setPest(!pest)}>
              <Label>Pest resistant</Label>
            </Checkbox>
          </Field>
          <Field>
            <Checkbox checked={light} onChange={() => setLight(!light)}>
              <Label>Needs direct light</Label>
            </Checkbox>
          </Field>
          <Field>
            <Checkbox checked={drought} onChange={() => setDrought(!drought)}>
              <Label>Drought-tolerant</Label>
            </Checkbox>
          </Field>
        </Fieldset>
      </Col>
    </Row>
  );
};

export default Example;
