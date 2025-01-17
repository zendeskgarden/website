/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useTheme } from 'styled-components';
import {
  ColorScheme,
  ColorSchemeProvider,
  DEFAULT_THEME,
  ThemeProvider,
  useColorScheme,
  useDocument
} from '@zendeskgarden/react-theming';
import { Body, Chrome, Header } from '@zendeskgarden/react-chrome';
import { IMenuProps, Item, ItemGroup, Menu } from '@zendeskgarden/react-dropdowns';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as DarkIcon } from '@zendeskgarden/svg-icons/src/16/moon-stroke.svg';
import { ReactComponent as LightIcon } from '@zendeskgarden/svg-icons/src/16/sun-stroke.svg';
import { ReactComponent as SystemIcon } from '@zendeskgarden/svg-icons/src/16/monitor-stroke.svg';

const ThemedExample = () => {
  const { colorScheme, isSystem, setColorScheme } = useColorScheme();
  const theme = useTheme() || DEFAULT_THEME;
  const doc = useDocument();

  const handleColorSchemeChange: IMenuProps['onChange'] = changes => {
    if (changes.value) {
      setColorScheme(changes.value as ColorScheme);
    }
  };

  return (
    <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, base: colorScheme } }}>
      <Chrome isFluid style={{ height: 80 }}>
        <Body>
          <Header isStandalone>
            <Header.ItemWrapper>
              <Menu
                appendToNode={doc ? doc.body : undefined}
                button={props => (
                  <IconButton {...props} focusInset>
                    {colorScheme === 'dark' ? <DarkIcon /> : <LightIcon />}
                  </IconButton>
                )}
                onChange={handleColorSchemeChange}
                placement="bottom-end"
                selectedItems={[{ value: isSystem ? 'system' : colorScheme }]}
              >
                <ItemGroup aria-label="Switch theme" type="radio">
                  <Item icon={<LightIcon />} value="light">
                    Light
                  </Item>
                  <Item icon={<DarkIcon />} value="dark">
                    Dark
                  </Item>
                  <Item icon={<SystemIcon />} isSelected value="system">
                    System
                  </Item>
                </ItemGroup>
              </Menu>
            </Header.ItemWrapper>
          </Header>
        </Body>
      </Chrome>
    </ThemeProvider>
  );
};

const Example = () => (
  <ColorSchemeProvider colorSchemeKey="color-scheme-example">
    <ThemedExample />
  </ColorSchemeProvider>
);

export default Example;
