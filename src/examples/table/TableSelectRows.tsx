/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Field, Checkbox, Label } from '@zendeskgarden/react-forms';

const rowData: any = [];

for (let x = 0; x < 10; x++) {
  rowData.push({
    index: `row-${x}`,
    fruit: `Fruit #${x}`,
    sun: 'Full sun',
    soil: 'Well draining'
  });
}

const isSelectAllIndeterminate = (rows: any) => {
  const numSelectedRows = rows.reduce((accumulator, row) => {
    if (row.selected) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  return numSelectedRows > 0 && numSelectedRows < rows.length;
};

const isSelectAllChecked = (rows: any) => {
  return rows.every((row: any) => row.selected);
};

const Example = () => {
  const [data, setData] = useState(rowData);
  const [shiftEnabled, setShiftEnabled] = useState(false);
  const [focusedRowIndex, setFocusedRowIndex] = useState(undefined);

  return (
    <div style={{ minWidth: 500 }}>
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell isMinimum>
              <Field>
                <Checkbox
                  indeterminate={isSelectAllIndeterminate(data)}
                  checked={isSelectAllChecked(data)}
                  onChange={e => {
                    if (e.target.checked) {
                      const updatedRows = data.map((row: any) => ({ ...row, selected: true }));

                      setData(updatedRows);
                    } else {
                      const updatedRows = data.map((row: any) => ({ ...row, selected: false }));

                      setData(updatedRows);
                    }
                  }}
                >
                  <Label hidden>Select all tickets</Label>
                </Checkbox>
              </Field>
            </HeaderCell>
            <HeaderCell>Fruit</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {data.map((row, index) => (
            <Row key={row.index} isSelected={row.selected}>
              <Cell isMinimum>
                <Field>
                  <Checkbox
                    checked={row.selected}
                    onKeyDown={e => {
                      if (e.keyCode === KEY_CODES.SHIFT) {
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
                          .every(row => row.selected);

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
                    <Label hidden>Select ticket</Label>
                  </Checkbox>
                </Field>
              </Cell>
              <Cell>{row.fruit}</Cell>
              <Cell>{row.sun}</Cell>
              <Cell>{row.soil}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </div>
  );
};

export default Example;
