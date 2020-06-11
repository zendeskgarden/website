/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ISidebarSection } from '../../../layouts/Sidebar';
import { LG, UnorderedList } from '@zendeskgarden/react-typography';
import { Link } from '../../../layouts/Root/components/StyledNavigationLink';
import styled from 'styled-components';

const StyledUnorderedList = styled(UnorderedList)`
  margin: 0 0 ${p => p.theme.space.sm} 0;
`;

const StyledListItem = styled(UnorderedList.Item)`
  list-style: none;
`;

export const OverviewLinks: React.FC<{ nav: ISidebarSection[] }> = ({ nav }) => {
  const content = nav.map(section => (
    <StyledUnorderedList key={`${section.title}`}>
      <LG isBold>{section.title}</LG>
      {section.items && (
        <StyledUnorderedList>
          {section.items?.map(group => {
            if (group.items) {
              return (
                <StyledListItem>
                  {group.title}
                  <UnorderedList>
                    <UnorderedList.Item>
                      {group.items.map(child => {
                        return (
                          <UnorderedList.Item key={`${child.title}`}>
                            <Link to={`${child.id}`}>{child.title}</Link>
                          </UnorderedList.Item>
                        );
                      })}
                    </UnorderedList.Item>
                  </UnorderedList>
                </StyledListItem>
              );
            }

            return (
              <StyledListItem key={`${group.title}`}>
                <Link to={`${group.id}`}>{group.title}</Link>
              </StyledListItem>
            );
          })}
        </StyledUnorderedList>
      )}
    </StyledUnorderedList>
  ));

  return <nav>{content}</nav>;
};
