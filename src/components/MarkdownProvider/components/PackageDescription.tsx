/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { UnorderedList } from '@zendeskgarden/react-typography';

export interface IPackage {
  version: string;
  name: string;
  description: string;
}

export const PackageDescription: React.FC<{ data: IPackage }> = ({ data }) => {
  return (
    <UnorderedList>
      <UnorderedList.Item>Name: {data.name}</UnorderedList.Item>
      <UnorderedList.Item>Version: {data.version}</UnorderedList.Item>
      <UnorderedList.Item>Description: {data.description}</UnorderedList.Item>
    </UnorderedList>
  );
};
