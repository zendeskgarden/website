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
        <Tab item="tab-2">Sugar Maple</Tab>
        <Tab item="tab-3">Dogwood</Tab>
      </TabList>
      <TabPanel item="tab-1">
        Elms are deciduous and semi-deciduous trees comprising the flowering plant genus Ulmus in
        the plant family Ulmaceae.
      </TabPanel>
      <TabPanel item="tab-2">
        The sugar maple is one of America’s most-loved trees. In fact, more states have claimed it
        as their state tree than any other single species—for New York, West Virginia, Wisconsin,
        and Vermont, the maple tree stands alone.
      </TabPanel>
      <TabPanel item="tab-3">
        Cornus is a genus of about 30–60 species of woody plants in the family Cornaceae, commonly
        known as dogwoods, which can generally be distinguished by their blossoms, berries, and
        distinctive bark
      </TabPanel>
    </Tabs>
  );
};

export default Example;
