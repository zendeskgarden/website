/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Range } from '@zendeskgarden/react-forms';

type validationTypes = 'success' | 'warning' | 'error';

const messages: Record<validationTypes, string> = {
  success: 'Growing all the time',
  warning: 'Growing regularly',
  error: 'Growing slowly'
};

const Example = () => {
  const [validation, setValidation] = useState<validationTypes>('warning');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value < 33) {
      setValidation('success');
    } else if (value >= 33 && value <= 66) {
      setValidation('warning');
    } else {
      setValidation('error');
    }
  };

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Flowers</Field.Label>
          <Range step={1} onChange={onChange} />
          <Field.Message validation={validation}>{messages[validation]}</Field.Message>
        </Field>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
