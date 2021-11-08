/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ColorSwatch } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import { labeledColors } from '../../../react-components/packages/colorpickers/stories/examples/utils';

export const colors = labeledColors(
  DEFAULT_THEME.palette,
  ['green', 'red', 'blue', 'yellow'],
  ['200', '300', '400', '500', '600', '700', '800']
);

const matrix = convertToMatrix(colors, 7);

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <ColorSwatch colors={matrix} />
    </Col>
  </Row>
);

export default Example;
