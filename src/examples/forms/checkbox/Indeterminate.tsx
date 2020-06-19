/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Field, Label, Checkbox } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

interface ISelectPerennial {
  type: 'perennial';
}

interface ISelectAnnual {
  type: 'annual';
}

interface ISelectAll {
  type: 'all';
}

interface ISelectNone {
  type: 'none';
}

const initialState = { annual: true, perennial: false };

type ActionTypes = ISelectPerennial | ISelectAnnual | ISelectAll | ISelectNone;

type ReducerType = (state: typeof initialState, action: ActionTypes) => typeof initialState;

const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case 'all':
      return { annual: true, perennial: true };
    case 'none':
      return { annual: false, perennial: false };
    case 'annual':
      return { ...state, annual: !state.annual };
    case 'perennial':
      return { ...state, perennial: !state.perennial };
    default:
      return state;
  }
};

const StyledGroup = styled(Field)`
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 6}px;
`;

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { annual, perennial } = state;

  const onParentChange = () => {
    if (perennial || annual) {
      dispatch({ type: 'all' });
    }

    if (!perennial || !annual) {
      dispatch({ type: 'all' });
    }

    if (perennial && annual) {
      dispatch({ type: 'none' });
    }
  };

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <Field>
          <Checkbox
            onChange={onParentChange}
            checked={perennial && annual}
            indeterminate={!perennial && !annual ? false : !perennial || !annual}
          >
            <Label>Growth types</Label>
          </Checkbox>
        </Field>
        <StyledGroup>
          <Field>
            <Checkbox checked={annual} onChange={() => dispatch({ type: 'annual' })}>
              <Label>Annual</Label>
            </Checkbox>
          </Field>
          <Field>
            <Checkbox checked={perennial} onChange={() => dispatch({ type: 'perennial' })}>
              <Label>Perennial</Label>
            </Checkbox>
          </Field>
        </StyledGroup>
      </Col>
    </Row>
  );
};

export default Example;
