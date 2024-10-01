/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Field, Checkbox } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

interface ISelectLight {
  type: 'light';
}

interface ISelectPest {
  type: 'pest';
}

interface ISelectAll {
  type: 'all';
}

interface ISelectNone {
  type: 'none';
}

const initialState = { pest: true, light: false };

type ActionTypes = ISelectLight | ISelectPest | ISelectAll | ISelectNone;

type ReducerType = (state: typeof initialState, action: ActionTypes) => typeof initialState;

const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case 'all':
      return { pest: true, light: true };
    case 'none':
      return { pest: false, light: false };
    case 'pest':
      return { ...state, pest: !state.pest };
    case 'light':
      return { ...state, light: !state.light };
    default:
      return state;
  }
};

const StyledGroup = styled(Field)`
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 6}px;
`;

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pest, light } = state;

  const onParentChange = () => {
    if (light || pest) {
      dispatch({ type: 'all' });
    }

    if (!light || !pest) {
      dispatch({ type: 'all' });
    }

    if (light && pest) {
      dispatch({ type: 'none' });
    }
  };

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col size="auto">
        <Field>
          <Checkbox
            onChange={onParentChange}
            checked={!!light && pest}
            indeterminate={!light && !pest ? false : !light || !pest}
          >
            <Field.Label>Outdoor readiness</Field.Label>
          </Checkbox>
        </Field>
        <StyledGroup>
          <Field>
            <Checkbox
              checked={pest}
              onChange={() => {
                dispatch({ type: 'pest' });
              }}
            >
              <Field.Label isRegular>Pest resistant</Field.Label>
            </Checkbox>
          </Field>
          <Field>
            <Checkbox
              checked={light}
              onChange={() => {
                dispatch({ type: 'light' });
              }}
            >
              <Field.Label isRegular>Needs direct light</Field.Label>
            </Checkbox>
          </Field>
        </StyledGroup>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
