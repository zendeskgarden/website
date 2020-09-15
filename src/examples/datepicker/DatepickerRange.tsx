/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { DatepickerRange } from '@zendeskgarden/react-datepickers';
import { Field, Label, Input, Message } from '@zendeskgarden/react-forms';
import { compareAsc, addDays } from 'date-fns';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const StyledCol = styled(Col)`
  margin-bottom: ${p => p.theme.space.md};
  max-width: 300px;
`;

const Example = () => {
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(addDays(new Date(), 16));

  const isInvalid = () => compareAsc(startValue, endValue) === 1;

  return (
    <DatepickerRange
      startValue={startValue}
      endValue={endValue}
      onChange={changes => {
        changes.startValue && setStartValue(changes.startValue);
        changes.endValue && setEndValue(changes.endValue);
      }}
    >
      <Grid>
        <Row justifyContent="center">
          <StyledCol>
            <Field>
              <Label>Start</Label>
              <DatepickerRange.Start>
                <Input />
              </DatepickerRange.Start>
            </Field>
          </StyledCol>
          <StyledCol>
            <Field>
              <Label>End</Label>
              <DatepickerRange.End>
                <Input validation={isInvalid() ? 'error' : undefined} />
              </DatepickerRange.End>
              {isInvalid() && (
                <Message validation="error">End date must occur after the start date</Message>
              )}
            </Field>
          </StyledCol>
        </Row>
        <Row justifyContent="center">
          <DatepickerRange.Calendar />
        </Row>
      </Grid>
    </DatepickerRange>
  );
};

export default Example;
