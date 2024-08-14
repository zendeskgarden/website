/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';
import { KEYS } from '@zendeskgarden/container-utilities';
import { Field, Checkbox } from '@zendeskgarden/react-forms';

const StyledContainer = styled.div`
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
`;
interface IRowData {
  id: string;
  fruit: string;
  sun: string;
  soil: string;
  selected: boolean;
}

const rowData: IRowData[] = Array.from(Array(10)).map((row, index) => ({
  id: `row-${index}`,
  fruit: `Fruit #${index}`,
  sun: 'Full sun',
  soil: 'Well draining',
  selected: false
}));

const isSelectAllIndeterminate = (rows: IRowData[]) => {
  const numSelectedRows = rows.reduce((accumulator, row) => {
    if (row.selected) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  return numSelectedRows > 0 && numSelectedRows < rows.length;
};

const isSelectAllChecked = (rows: IRowData[]) => rows.every(row => row.selected);

const Example = () => {
  const [data, setData] = useState(rowData);
  const [shiftEnabled, setShiftEnabled] = useState(false);
  const [focusedRowIndex, setFocusedRowIndex] = useState<number | undefined>(undefined);

  return (
    <StyledContainer>
      <Table style={{ minWidth: 500 }}>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell isMinimum>
              <Field>
                <Checkbox
                  indeterminate={isSelectAllIndeterminate(data)}
                  checked={isSelectAllChecked(data)}
                  onChange={e => {
                    if (e.target.checked) {
                      const updatedRows = data.map(row => ({ ...row, selected: true }));

                      setData(updatedRows);
                    } else {
                      const updatedRows = data.map(row => ({ ...row, selected: false }));

                      setData(updatedRows);
                    }
                  }}
                >
                  <Field.Label hidden>Select all tickets</Field.Label>
                </Checkbox>
              </Field>
            </Table.HeaderCell>
            <Table.HeaderCell>Fruit</Table.HeaderCell>
            <Table.HeaderCell>Sun exposure</Table.HeaderCell>
            <Table.HeaderCell>Soil type</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          {data.map((row, index) => (
            <Table.Row key={row.id} isSelected={row.selected}>
              <Table.Cell isMinimum>
                <Field>
                  <Checkbox
                    checked={row.selected}
                    onKeyDown={e => {
                      if (e.key === KEYS.SHIFT) {
                        setShiftEnabled(true);
                      }
                    }}
                    onKeyUp={() => {
                      setShiftEnabled(false);
                    }}
                    onChange={e => {
                      const updatedRows = [...data];

                      if (shiftEnabled && focusedRowIndex !== undefined) {
                        const startIndex = Math.min(focusedRowIndex, index);
                        const endIndex = Math.max(focusedRowIndex, index);

                        const isAllChecked = updatedRows
                          .slice(startIndex, endIndex + 1)
                          .every(slicedRow => slicedRow.selected);

                        for (let x = startIndex; x <= endIndex; x++) {
                          if (x === index && isAllChecked) {
                            updatedRows[x].selected = true;
                            continue;
                          }

                          updatedRows[x].selected = !isAllChecked;
                        }
                      } else if (e.target.checked) {
                        updatedRows[index].selected = true;
                      } else {
                        updatedRows[index].selected = false;
                      }

                      setData(updatedRows);
                      setFocusedRowIndex(index);
                    }}
                  >
                    <Field.Label hidden>Select ticket for {row.fruit}</Field.Label>
                  </Checkbox>
                </Field>
              </Table.Cell>
              <Table.Cell>{row.fruit}</Table.Cell>
              <Table.Cell>{row.sun}</Table.Cell>
              <Table.Cell>{row.soil}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </StyledContainer>
  );
};

export default Example;
