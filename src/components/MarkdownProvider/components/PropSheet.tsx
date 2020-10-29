/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactElement } from 'react';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { MD, Ellipsis } from '@zendeskgarden/react-typography';
import { Table, Head, Body, HeaderRow, HeaderCell, Row, Cell } from '@zendeskgarden/react-tables';
import { IComponentData } from 'src/templates/types';
import { Tag } from '@zendeskgarden/react-tags';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Button } from '@zendeskgarden/react-buttons';
import { Markdown } from './Markdown';
import { StyledCodeBlock as CodeBlock } from './CodeBlock';

export const PropSheet: React.FC<{
  components: IComponentData[];
  componentName: string;
  headerName?: string;
}> = ({ components, componentName, headerName }) => {
  const component = components.find(c => c.name.toLowerCase() === componentName.toLowerCase())!;

  return (
    <>
      {Object.keys(component.props).length > 0 && (
        <div
          css={css`
            margin-bottom: ${p => p.theme.space.xl};
            overflow: auto;
          `}
        >
          <Table
            css={`
              min-width: 700px;
            `}
          >
            <Head>
              <HeaderRow>
                <HeaderCell>{headerName}</HeaderCell>
                <HeaderCell>Type</HeaderCell>
                <HeaderCell>Default</HeaderCell>
                <HeaderCell>Description</HeaderCell>
              </HeaderRow>
            </Head>
            <Body>
              {Object.keys(component.props).map(name => {
                const prop = component.props[name];
                let defaultValue: string | ReactElement = prop.defaultValue || '–';
                let defaultMonospace = true;

                if (prop.required && !prop.defaultValue) {
                  defaultValue = <Tag>Required</Tag>;
                  defaultMonospace = false;
                }

                const type =
                  prop.type.indexOf('=>') === -1 ? (
                    prop.type
                  ) : (
                    <Tooltip
                      css={`
                        max-width: 460px;
                      `}
                      type="light"
                      size="small"
                      placement="top-start"
                      zIndex={100}
                      content={<CodeBlock size="small">{prop.type}</CodeBlock>}
                    >
                      <Button isLink>func</Button>
                    </Tooltip>
                  );

                return (
                  <Row key={`${component.name}-${name}`}>
                    <Cell>
                      <MD
                        isMonospace
                        css={css`
                          color: ${p => getColor('neutralHue', 700, p.theme)};
                        `}
                      >
                        <Ellipsis>{name}</Ellipsis>
                      </MD>
                    </Cell>
                    <Cell>
                      <MD
                        tag="span"
                        isMonospace
                        css={css`
                          word-break: break-word;
                          color: ${p => getColor('red', 700, p.theme)};
                        `}
                      >
                        {type}
                      </MD>
                    </Cell>
                    <Cell>
                      <MD tag="span" isMonospace={defaultMonospace}>
                        {component.name === 'ThemeProvider' && name === 'theme' ? (
                          <Markdown>[DEFAULT_THEME](/components/theme-object)</Markdown>
                        ) : (
                          defaultValue
                        )}
                      </MD>
                    </Cell>
                    <Cell>
                      <MD
                        tag="span"
                        css={`
                          word-break: break-word;
                        `}
                      >
                        <Markdown>{prop.description}</Markdown>
                      </MD>
                    </Cell>
                  </Row>
                );
              })}
            </Body>
          </Table>
        </div>
      )}
    </>
  );
};

PropSheet.defaultProps = {
  headerName: 'Prop name'
};
