/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

export interface IPackage {
  version: string;
  name: string;
  description: string;
}

export const PackageDescription: React.FC<{ data: IPackage }> = ({ data }) => {
  return (
    <ul>
      <li>Name: {data.name}</li>
      <li>Version: {data.version}</li>
      <li>Description: {data.description}</li>
    </ul>
  );
};
