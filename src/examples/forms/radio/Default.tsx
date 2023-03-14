/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Fieldset, Label, Radio } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <Fieldset>
          <Fieldset.Legend>Choose a plant lifecycle</Fieldset.Legend>
          <Field>
            <Radio
              name="default example"
              value="annual"
              checked={radioValue === 'annual'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Annual</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="default example"
              value="perennial"
              checked={radioValue === 'perennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Perennial</Label>
            </Radio>
          </Field>
        </Fieldset>
      </Col>
    </Row>
  );
};

export default Example;
