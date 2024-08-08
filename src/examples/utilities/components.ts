/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { SELECTOR_FOCUS_VISIBLE } from '@zendeskgarden/react-theming';

const components = [
  {
    name: 'arrowStyles',
    props: {
      position: {
        required: true,
        type: "'top' | 'top-left' | 'top-right' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom'",
        description: 'Positions the arrow against the base element'
      },
      '[options.size]': {
        type: 'string',
        defaultValue: "'6px'",
        description:
          'Expresses a CSS dimension as a distance from the base (hypotenuse) to point (right angle) of the arrow'
      },
      '[options.inset]': {
        type: 'string',
        defaultValue: "'0'",
        description:
          'Tweaks arrow positioning by adjusting with a positive (in) or negative (out) CSS dimension'
      },
      '[options.animationModifier]': {
        type: 'string',
        description:
          "Indicates a CSS class or attribute selector which, when applied to the base element, animates the arrow's appearance"
      }
    }
  },
  {
    name: 'focusStyles',
    props: {
      '[options.theme]': {
        required: true,
        type: 'DefaultTheme',
        defaultValue: 'DEFAULT_THEME',
        description: 'Provides values used to resolve the desired color'
      },
      '[options.hue]': {
        type: 'Object | string',
        defaultValue: "'primaryHue'",
        description:
          'Provides a theme object [palette](/components/theme-object#palette) hue or [color](/components/theme-object#colors) key, or any valid CSS color notation'
      },
      '[options.shade]': {
        type: 'number',
        defaultValue: 600,
        description: 'Selects a shade for the given `hue`'
      },
      '[options.shadowWidth]': {
        type: 'string',
        defaultValue: "'md'",
        description:
          'Provides a theme object [shadowWidth](/components/theme-object#shadowwidths) key for the cumulative width of the `box-shadow`'
      },
      '[options.spacerHue]': {
        type: 'Object | string',
        defaultValue: "'background'",
        description:
          'Provides a theme object [palette](/components/theme-object#palette) hue or [color](/components/theme-object#colors) key, or any valid CSS color notation'
      },
      '[options.spacerShade]': {
        type: 'number',
        defaultValue: 600,
        description: 'Selects a shade for the given `spacerHue`'
      },
      '[options.spacerWidth]': {
        type: 'string',
        defaultValue: "'sm'",
        description:
          'Provides a theme object [shadowWidth](/components/theme-object#shadowwidths) for the white spacer, or `null` to remove'
      },
      '[options.inset]': {
        type: 'boolean',
        description: 'Determines whether the `box-shadow` is inset'
      },
      '[options.selector]': {
        type: 'string',
        defaultValue: SELECTOR_FOCUS_VISIBLE,
        description: 'Provides a subsitute pseudo-class CSS selector'
      },
      '[options.styles]': {
        type: 'CSSObject',
        description: 'Adds CSS property values to be rendered on focus'
      },
      '[options.condition]': {
        type: 'boolean',
        defaultValue: 'true',
        description:
          'Supplies an optional condition that can be used to prevent the focus `box-shadow`'
      }
    }
  },
  {
    name: 'getColor',
    props: {
      hue: {
        required: true,
        type: 'Object | string',
        description:
          'Provides a theme object [palette](/components/theme-object#palette) hue or [color](/components/theme-object#colors) key, or any valid CSS color notation'
      },
      shade: {
        type: 'number',
        defaultValue: 600,
        description: 'Selects a shade for the given hue'
      },
      theme: {
        type: 'DefaultTheme',
        defaultValue: 'DEFAULT_THEME',
        description: 'Provides values used to resolve the desired color'
      },
      transparency: {
        type: 'number',
        description: 'Sets an alpha channel between 0 and 1'
      }
    }
  },
  {
    name: 'getFocusBoxShadow',
    props: {
      '[options.theme]': {
        required: true,
        type: 'DefaultTheme',
        defaultValue: 'DEFAULT_THEME',
        description: 'Provides values used to resolve the desired color'
      },
      '[options.hue]': {
        type: 'Object | string',
        defaultValue: "'primaryHue'",
        description:
          'Provides a theme object [palette](/components/theme-object#palette) hue or [color](/components/theme-object#colors) key, or any valid CSS color notation'
      },
      '[options.shade]': {
        type: 'number',
        defaultValue: 600,
        description: 'Selects a shade for the given `hue`'
      },
      '[options.shadowWidth]': {
        type: 'string',
        defaultValue: "'md'",
        description:
          'Provides a theme object [shadowWidth](/components/theme-object#shadowwidths) key for the cumulative width of the `box-shadow`'
      },
      '[options.spacerHue]': {
        type: 'Object | string',
        defaultValue: "'background'",
        description:
          'Provides a theme object [palette](/components/theme-object#palette) hue or [color](/components/theme-object#colors) key, or any valid CSS color notation'
      },
      '[options.spacerShade]': {
        type: 'number',
        defaultValue: 600,
        description: 'Selects a shade for the given `spacerHue`'
      },
      '[options.spacerWidth]': {
        type: 'string',
        defaultValue: "'sm'",
        description:
          'Provides a theme object [shadowWidth](/components/theme-object#shadowwidths) for the white spacer, or `null` to remove'
      },
      '[options.inset]': {
        type: 'boolean',
        description: 'Determines whether the `box-shadow` is inset'
      },
      '[options.boxShadow]': {
        type: 'string',
        description:
          'Provides an existing `box-shadow` (a drop shadow, for example) to be retained along with the focus ring'
      }
    }
  },
  {
    name: 'getLineHeight',
    props: {
      height: {
        required: true,
        type: 'string | number',
        description: 'Specifies the desired line height in pixels'
      },
      fontSize: {
        required: true,
        type: 'string | number',
        description: 'Specifies the font size (in pixels) of text contained within the line'
      }
    }
  },
  {
    name: 'mediaQuery',
    props: {
      query: {
        required: true,
        type: "'up' | 'down' | 'only' | 'between'",
        description: `Specifies the query, one of:
- \`'up'\` match screen widths including the given breakpoint and up
- \`'down'\` match screen widths included within the given breakpoint and down
- \`'only'\` match screen widths included within the given breakpoint
- \`'between'\` match screen widths including the first breakpoint up through screen widths included within the second breakpoint`
      },
      breakpoint: {
        required: true,
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | Array",
        description:
          "Specifies a theme object [breakpoints](/components/theme-object#breakpoints) key, or an array of two keys when`'between'` is the specified query"
      },
      theme: {
        type: 'DefaultTheme',
        defaultValue: 'DEFAULT_THEME',
        description: 'Provides values used to resolve the specified breakpoint'
      }
    }
  },
  {
    name: 'menuStyles',
    props: {
      position: {
        required: true,
        type: "'top' | 'right' | 'bottom' | 'left'",
        description:
          'Specifies the menu position relative to the component that triggers menu expansion'
      },
      '[options.theme]': {
        type: 'DefaultTheme',
        defaultValue: 'DEFAULT_THEME',
        description: 'Provides theming values used to style the menu component'
      },
      '[options.hidden]': {
        type: 'boolean',
        description: 'Determines whether the menu is hidden'
      },
      '[options.margin]': {
        type: 'string',
        description:
          'Determines the amount of space, as a CSS dimension, between the menu and its trigger'
      },
      '[options.zIndex]': {
        type: 'number',
        defaultValue: 0,
        description: 'Specifies the `z-index` for the absolutely positioned menu wrapper'
      },
      '[options.childSelector]': {
        type: 'string',
        defaultValue: "'> *'",
        description:
          'Indicates a CSS selector which, when applied to the wrapper, identifies the child menu component'
      },
      '[options.animationModifier]': {
        type: 'string',
        description:
          "Indicates a CSS class or attribute selector which, when applied to the wrapper, animates the menu's appearance"
      }
    }
  },
  {
    name: 'retrieveComponentStyles',
    props: {
      id: {
        required: true,
        type: 'string',
        description:
          "Specifies the unique ID used to retrieve CSS styles from the theme's [components](/components/theme-object#components) object"
      },
      props: {
        required: true,
        type: 'Partial<ThemeProps<Partial<DefaultTheme>>>',
        description: 'Provides component props which contain the context `theme` object'
      }
    }
  },
  {
    name: 'useText',
    props: {
      component: {
        required: true,
        type: 'string',
        description: 'Specifies the React component to which the `props` belong'
      },
      props: {
        required: true,
        type: 'Record<string, any>',
        description: 'Provides component props to check for `name`'
      },
      name: {
        required: true,
        type: 'string',
        description: 'Determines the name of the component prop to set default text on'
      },
      text: {
        required: true,
        type: 'string',
        description: 'Specifies default text to apply if the value of `props[name]` is `undefined`'
      },
      condition: {
        type: 'boolean',
        defaultValue: true,
        description: 'Supplies an optional condition that can be used to prevent evaluation'
      }
    }
  },
  {
    name: 'withTheme',
    props: {
      Component: {
        required: true,
        type: 'Object',
        description: 'Gets wrapped by a higher-order component with an added `theme` prop'
      }
    }
  }
];

export default components;
