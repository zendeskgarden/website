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
import { Row, Col } from '@zendeskgarden/react-grid';

const isCompact = false;

const StyledRow = styled(Row)`
  margin-top: ${p => p.theme.space[isCompact ? 'sm' : 'md']};
`;

const Example = () => {
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(addDays(new Date(), 16));
  const calendarRangeWidth = isCompact ? 488 : 600;

  const isInvalid = () => compareAsc(startValue, endValue) === 1;

  return (
    <DatepickerRange
      startValue={startValue}
      endValue={endValue}
      onChange={changes => {
        changes.startValue && setStartValue(changes.startValue);
        changes.endValue && setEndValue(changes.endValue);
      }}
      isCompact={isCompact}
    >
      <Row justifyContent="center" style={{ minWidth: calendarRangeWidth }}>
        <Col style={{ maxWidth: calendarRangeWidth }}>
          <Row>
            <Col>
              <Field>
                <Label>Start</Label>
                <DatepickerRange.Start>
                  <Input isCompact={isCompact} />
                </DatepickerRange.Start>
              </Field>
            </Col>
            <Col>
              <Field>
                <Label>End</Label>
                <DatepickerRange.End>
                  <Input isCompact={isCompact} validation={isInvalid() ? 'error' : undefined} />
                </DatepickerRange.End>
                {isInvalid() && (
                  <Message validation="error">End date must occur after the start date</Message>
                )}
              </Field>
            </Col>
          </Row>
          <StyledRow>
            <Col>
              <DatepickerRange.Calendar />
            </Col>
          </StyledRow>
        </Col>
      </Row>
    </DatepickerRange>
  );
};

export default Example;
