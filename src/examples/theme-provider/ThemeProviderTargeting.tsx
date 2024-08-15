/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css, DefaultTheme } from 'styled-components';
import { Tabs } from '@zendeskgarden/react-tabs';
import { getColorV8, ThemeProvider } from '@zendeskgarden/react-theming';

/* Each Garden example is wrapped by a <ThemeProvider> */
const Example = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');
  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme,
    components: {
      'tabs.tab': css`
        border-top: ${p => p.theme.borderStyles.solid} transparent;
        border-bottom: none;
        border-width: ${p => p.theme.borderWidths.md};
      `,
      'tabs.tablist': css`
        margin-top: ${p => p.theme.space.md};
        margin-bottom: 0;
        border-top: ${p => p.theme.borderWidths.sm} ${p => p.theme.borderStyles.solid}
          ${p => getColorV8('neutralHue', 300, p.theme)};
        border-bottom: none;
      `
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
        <Tabs.TabPanel item="tab-1">
          Elms are deciduous and semi-deciduous trees comprising the flowering plant genus Ulmus in
          the plant family Ulmaceae.
        </Tabs.TabPanel>
        <Tabs.TabPanel item="tab-2">
          The sugar maple is one of America’s most-loved trees. In fact, more states have claimed it
          as their state tree than any other single species—for New York, West Virginia, Wisconsin,
          and Vermont, the maple tree stands alone.
        </Tabs.TabPanel>
        <Tabs.TabPanel item="tab-3">
          Cornus is a genus of about 30–60 species of woody plants in the family Cornaceae, commonly
          known as dogwoods, which can generally be distinguished by their blossoms, berries, and
          distinctive bark.
        </Tabs.TabPanel>
        <Tabs.TabList>
          <Tabs.Tab item="tab-1">Elm</Tabs.Tab>
          <Tabs.Tab item="tab-2">Sugar Maple</Tabs.Tab>
          <Tabs.Tab item="tab-3">Dogwood</Tabs.Tab>
        </Tabs.TabList>
      </Tabs>
    </ThemeProvider>
  );
};

export default Example;
