/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePickerRange } from '@zendeskgarden/react-datepickers';
import { Field, Input, Message } from '@zendeskgarden/react-forms';
import { compareAsc, addDays } from 'date-fns';
import { Grid } from '@zendeskgarden/react-grid';

const isCompact = false;

const StyledRow = styled(Grid.Row)`
  margin-top: ${p => p.theme.space[isCompact ? 'sm' : 'md']};
`;

const Example = () => {
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(addDays(new Date(), 16));
  const calendarRangeWidth = isCompact ? 488 : 600;

  const isInvalid = () => compareAsc(startValue, endValue) === 1;

  return (
    <DatePickerRange
      startValue={startValue}
      endValue={endValue}
      onChange={changes => {
        changes.startValue && setStartValue(changes.startValue);
        changes.endValue && setEndValue(changes.endValue);
      }}
      isCompact={isCompact}
    >
      <Grid.Row justifyContent="center" style={{ minWidth: calendarRangeWidth }}>
        <Grid.Col style={{ maxWidth: calendarRangeWidth }}>
          <Grid.Row>
            <Grid.Col>
              <Field>
                <Field.Label>Start</Field.Label>
                <DatePickerRange.Start>
                  <Input isCompact={isCompact} />
                </DatePickerRange.Start>
              </Field>
            </Grid.Col>
            <Grid.Col>
              <Field>
                <Field.Label>End</Field.Label>
                <DatePickerRange.End>
                  <Input isCompact={isCompact} validation={isInvalid() ? 'error' : undefined} />
                </DatePickerRange.End>
                {isInvalid() && (
                  <Message validation="error">End date must occur after the start date</Message>
                )}
              </Field>
            </Grid.Col>
          </Grid.Row>
          <StyledRow>
            <Grid.Col>
              <DatePickerRange.Calendar />
            </Grid.Col>
          </StyledRow>
        </Grid.Col>
      </Grid.Row>
    </DatePickerRange>
  );
};

export default Example;
