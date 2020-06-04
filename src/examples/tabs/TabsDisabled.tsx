/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';

const Example = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  return (
    <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
      <TabList>
        <Tab item="tab-1">Elm</Tab>
        <Tab item="tab-2" disabled>
          Sugar Maple
        </Tab>
        <Tab item="tab-3" disabled>
          Dogwood
        </Tab>
      </TabList>
      <TabPanel item="tab-1">Contents of Elm</TabPanel>
      <TabPanel item="tab-2">Contents of Sugar Maple</TabPanel>
      <TabPanel item="tab-3">Contents of Dogwood</TabPanel>
    </Tabs>
  );
};

export default Example;
