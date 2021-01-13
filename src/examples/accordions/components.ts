/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const components = [
  {
    name: 'Accordion.Header',
    extends: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    name: 'Accordion.Label',
    extends: 'ButtonHTMLAttributes<HTMLButtonElement>'
  },
  {
    name: 'Accordion.Panel',
    extends: 'HTMLAttributes<HTMLElement>'
  },
  {
    name: 'Accordion.Section',
    extends: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    name: 'Stepper.Content',
    extends: 'HTMLAttributes<HTMLDivElement>'
  },
  {
    name: 'Stepper.Label',
    extends: 'HTMLAttributes<HTMLDivElement>',
    props: {
      icon: {
        type: 'ReactNode',
        description: 'Replaces the label number with an icon'
      },
      isHidden: {
        type: 'boolean',
        description: 'Hides the label text'
      }
    }
  },
  {
    name: 'Stepper.Step',
    extends: 'LiHTMLAttributes<HTMLLIElement>'
  }
];

export default components;
