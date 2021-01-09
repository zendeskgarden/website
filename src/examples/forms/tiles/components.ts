/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const components = [
  {
    name: 'Tiles.Description',
    extends: 'HTMLAttributes<HTMLSpanElement>'
  },
  {
    name: 'Tiles.Icon',
    extends: 'HTMLAttributes<HTMLSpanElement>'
  },
  {
    name: 'Tiles.Label',
    extends: 'HTMLAttributes<HTMLSpanElement>'
  },
  {
    name: 'Tiles.Tile',
    extends: 'HTMLAttributes<HTMLLabelElement>',
    props: {
      disabled: {
        type: 'boolean',
        description: 'Indicates that the element is not interactive'
      },
      value: {
        type: 'string',
        description: 'Sets the value of the input'
      }
    }
  }
];

export default components;
