/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Provider, Layout } from './src/components';

export const wrapRootElement = ({ props, element }) => <Provider {...props}>{element}</Provider>;

export const wrapPageElement = ({ props, element }) => <Layout {...props}>{element}</Layout>;
