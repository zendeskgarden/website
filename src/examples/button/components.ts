/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const components = [
  {
    name: 'Button.EndIcon',
    extends: 'SVGAttributes<SVGSVGElement>',
    props: {
      isRotated: {
        type: 'boolean',
        description: 'Rotates icon 180 degrees'
      }
    }
  },
  {
    name: 'Button.StartIcon',
    extends: 'SVGAttributes<SVGSVGElement>',
    props: {
      isRotated: {
        type: 'boolean',
        description: 'Rotates icon 180 degrees'
      }
    }
  }
];

export default components;
