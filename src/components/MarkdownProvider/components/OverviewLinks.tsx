/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { ISidebarSection } from '../../../layouts/Sidebar';
import { LG, UnorderedList } from '@zendeskgarden/react-typography';
import { Link } from '../../../layouts/Root/components/StyledNavigationLink';

const StyledUnorderedList = styled(UnorderedList)`
  margin: 0 0 ${p => p.theme.space.sm} 0;
`;

const StyledListItem = styled(UnorderedList.Item)`
  list-style: none;
`;

export const OverviewLinks: React.FC<{ nav: ISidebarSection[] }> = ({ nav }) => {
  const content = nav.map((section, index) => {
    /* skip past Overview link-to-self */
    if (index > 0) {
      return (
        <>
          <LG isBold tag="h2">
            {section.title}
          </LG>
          {section.items && (
            <StyledUnorderedList>
              {section.items?.map(group => {
                if (group.items) {
                  return (
                    <StyledListItem key={group.title}>
                      <h3>{group.title}</h3>
                      <UnorderedList>
                        {group.items.map(child => (
                          <UnorderedList.Item key={child.id}>
                            <Link to={`${child.id}`}>{child.title}</Link>
                          </UnorderedList.Item>
                        ))}
                      </UnorderedList>
                    </StyledListItem>
                  );
                }

                return (
                  <StyledListItem key={group.title}>
                    <Link to={`${group.id}`}>{group.title}</Link>
                  </StyledListItem>
                );
              })}
            </StyledUnorderedList>
          )}
        </>
      );
    }

    return <></>;
  });

  return <nav>{content}</nav>;
};
