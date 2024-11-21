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
  default: 'Default [text](/components/paragraph)',
  subtle: 'Icons and meta information ([Input hint text](/components/input#hint-text))',
  onEmphasis: 'Text placed on `emphasis`',
  primary: 'Primary text ([Anchor](/components/anchor))',
  success:
    'Success text ([validation text](/components/input#validation) and [Alert](/components/alerts))',
  warning:
    'Warning text ([validation text](/components/input#validation) and [Alert](/components/alerts))',
  danger:
    'Danger text ([validation text](/components/input#validation) and [Alert](/components/alerts))',
  successEmphasis: 'Strong success text (title in [Alert](/components/alerts#type))',
  warningEmphasis: 'Strong warning text (title in [Alert](/components/alerts#type))',
  dangerEmphasis: 'Strong danger text (title in [Alert](/components/alerts#type))',
  disabled: 'Disabled text ([Input](/components/input#disabled))'
};

const FIGMA: Record<
  string,
  {
    dark: ColorParameters['dark'];
    light: ColorParameters['light'];
    usage: string;
  }
> = {
  placeholder: {
    dark: { hue: 'neutralHue', shade: 700 },
    light: { hue: 'neutralHue', shade: 400 },
    usage: 'Placeholder text ([Input](/components/input#placeholder))'
  }
};

const Example = () => {
  const theme = useTheme();
  const foreground = theme.colors.variables[theme.colors.base].foreground;
  const keys = Object.keys(foreground);

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
            const variable = `foreground.${key}`;
            const color = getColor({ theme, variable });
            const colorName = toColorName(theme, foreground[key]);

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
