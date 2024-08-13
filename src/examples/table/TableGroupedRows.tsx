/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Table } from '@zendeskgarden/react-tables';

const Example = () => (
  <div style={{ overflowX: 'auto' }}>
    <Table style={{ minWidth: 500 }}>
      <Table.Head>
        <Table.HeaderRow>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Sun exposure</Table.HeaderCell>
          <Table.HeaderCell>Soil</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        <Table.GroupRow>
          <Table.Cell colSpan={3}>
            <b>Fruits</b>
          </Table.Cell>
        </Table.GroupRow>
        <Table.Row>
          <Table.Cell>Raspberries</Table.Cell>
          <Table.Cell>Partial shade</Table.Cell>
          <Table.Cell>Moist and slightly acidic</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Strawberries</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Medium moisture</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Grapes</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Rich and well draining</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cherries</Table.Cell>
          <Table.Cell>Partial sun</Table.Cell>
          <Table.Cell>Rich and well draining</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tomatoes</Table.Cell>
          <Table.Cell>Partial shade</Table.Cell>
          <Table.Cell>Well draining</Table.Cell>
        </Table.Row>
        <Table.GroupRow>
          <Table.Cell colSpan={3}>
            <b>Vegetables</b>
          </Table.Cell>
        </Table.GroupRow>
        <Table.Row>
          <Table.Cell>Zucchini</Table.Cell>
          <Table.Cell>Partial shade</Table.Cell>
          <Table.Cell>Moist and slightly acidic</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Carrot</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Medium moisture</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Squash</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Rich and well draining</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Garlic</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Medium moisture</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Celery</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Rich and well draining</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default Example;
