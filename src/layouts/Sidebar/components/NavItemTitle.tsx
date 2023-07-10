/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Tag } from '@zendeskgarden/react-tags';
import React from 'react';

interface INavItemTitleProps {
  children: string;
}

export const NavItemTitle = ({ children }: INavItemTitleProps) => {
  const tags: string[] = [];
  const regex = /\s*?\[(?<tag>.*?)\]/gmu;
  const title = children.replace(regex, (_, tag) => {
    tags.push(tag);

    return '';
  });

  return (
    <>
      {title}{' '}
      {tags.map((tag, index) => {
        let hue;

        switch (tag) {
          case 'deprecated':
            hue = 'yellow';
            break;

          case 'new':
            hue = 'green';
            break;
        }

        return (
          <Tag key={index} hue={hue} size="small">
            {tag}
          </Tag>
        );
      })}
    </>
  );
};
