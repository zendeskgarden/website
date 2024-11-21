/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { useTheme } from 'styled-components';
import {
  ColorParameters,
  DEFAULT_THEME,
  getColor,
  IGardenTheme
} from '@zendeskgarden/react-theming';
import { Table } from '@zendeskgarden/react-tables';
import { Code, MD } from '@zendeskgarden/react-typography';
import { Markdown } from 'components/MarkdownProvider/components/Markdown';

const StyledContainer = styled.div`
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
`;

const StyledColor = styled.span`
  display: inline-block;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px
    ${p =>
      getColor({
        theme: p.theme,
        dark: { hue: 'white' },
        light: { hue: 'black' },
        transparency: 200
      })};
  background-color: ${p => p.color};
  width: ${p => p.theme.space.base * 5}px;
  height: ${p => p.theme.space.base * 5}px;
`;

type SemanticHue = Exclude<keyof typeof DEFAULT_THEME.colors, 'base' | 'variables'>;

const toColorName = (theme: IGardenTheme, property: string) => {
  let retVal = '';

  if (property.startsWith('rgba')) {
    const regex = /rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu;
    const rgba = regex.exec(property);

    if (rgba?.groups) {
      const _property = rgba.groups.property;
      const transparency = parseFloat(rgba.groups.alpha);

      retVal = `${toColorName(theme, _property)} @ opacity-${transparency}`;
    }
  } else {
    const [semanticHue, shade] = property.split('.');

    if (semanticHue === 'palette') {
      retVal = shade;
    } else {
      const hue = theme.colors[semanticHue as SemanticHue];

      retVal = `${hue}-${shade}`;
    }
  }

  return retVal;
};

const USAGE: Record<string, string> = {
  default:
    'Default layout borders and dividers ([Table header](/components/table), [Drawer](/components/drawer), [Pane](/components/pane))',
  subtle:
    'Inner layout borders and dividers ([Table body](/components/table), [Modal](/components/modal))',
  emphasis:
    'Interactive neutral borders with 3:1 or higher contrast ([Checkbox](/components/checkbox), [Radio](/components/radio))',
  success: 'Success layout borders ([Alert](/components/alerts#type))',
  warning: 'Warning layout borders ([Alert](/components/alerts#type))',
  danger: 'Danger layout borders ([Alert](/components/alerts#type))',
  primaryEmphasis:
    'Strong primary color (Focus outlines, [Outline buttons](/components/button#default))',
  successEmphasis:
    'Strong success border ([Input success validation](/components/input#validation))',
  warningEmphasis:
    'Strong warning border ([Input warning validation](/components/input#validation))',
  dangerEmphasis: 'Strong danger border ([Input danger validation](/components/input#validation))',
  disabled: 'Disabled border ([Disabled input](/components/input#disabled))'
};

const FIGMA: Record<
  string,
  {
    dark: ColorParameters['dark'];
    light: ColorParameters['light'];
    usage: string;
  }
> = {
  input: {
    dark: { hue: 'neutralHue', shade: 700 },
    light: { hue: 'neutralHue', shade: 400 },
    usage:
      'Interactive neutral borders ([Input](/components/input), [Combobox](/components/combobox), [Tiles](/components/tiles))'
  }
};

const Example = () => {
  const theme = useTheme();
  const border = theme.colors.variables[theme.colors.base].border;
  const keys = Object.keys(border);

  return (
    <StyledContainer>
      <Table isReadOnly style={{ minWidth: 500 }}>
        <Table.Caption>
          <MD>Use the dark/light mode toggle to view corresponding color variables</MD>
        </Table.Caption>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell isMinimum hidden>
              Swatch
            </Table.HeaderCell>
            <Table.HeaderCell width={120}>Color</Table.HeaderCell>
            <Table.HeaderCell width={160}>Variable</Table.HeaderCell>
            <Table.HeaderCell>Usage</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          {keys.map(key => {
            const variable = `border.${key}`;
            const color = getColor({ theme, variable });
            const colorName = toColorName(theme, border[key]);

            return (
              <Table.Row key={key}>
                <Table.Cell>
                  <StyledColor aria-label={colorName} color={color} />
                </Table.Cell>
                <Table.Cell>
                  <Code>{colorName}</Code>
                </Table.Cell>
                <Table.Cell>
                  <Code>{key}</Code>
                </Table.Cell>
                <Table.Cell>
                  <Markdown>{USAGE[key]}</Markdown>
                </Table.Cell>
              </Table.Row>
            );
          })}
          {Object.keys(FIGMA).map(key => {
            const variable = FIGMA[key];
            const dark = variable.dark;
            const light = variable.light;
            const color = getColor({ theme, dark, light });
            const colorName = toColorName(
              theme,
              theme.colors.base === 'dark'
                ? `${dark?.hue}.${dark?.shade}`
                : `${light?.hue}.${light?.shade}`
            );

            return (
              <Table.Row key={key}>
                <Table.Cell>
                  <StyledColor aria-label={colorName} color={color} />
                </Table.Cell>
                <Table.Cell>
                  <Code>{colorName}</Code>
                </Table.Cell>
                <Table.Cell>
                  <Code>*{key}</Code>
                </Table.Cell>
                <Table.Cell>
                  <Markdown>{variable.usage}</Markdown>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </StyledContainer>
  );
};

export default Example;
