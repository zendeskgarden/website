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
      '[options.shift]': {
        type: 'string',
        defaultValue: "'0'",
        description: 'Shifts arrow positioning along the edge of the base element'
      },
      '[options.animationModifier]': {
        type: 'string',
        description:
          "Indicates a CSS class or attribute selector which, when applied to the base element, animates the arrow's appearance"
      }
    }
  },
  {
    name: 'componentStyles',
    props: {
      'options.theme': {
        required: true,
        type: 'DefaultTheme',
        description: 'Provides `components` object used to resolve the given component ID'
      },
      '[options.componentId]': {
        type: 'string',
        description:
          'Specifies the lookup ID for `theme.components` styles. The ID will be inferred from the `data-garden-id` attribute if not provided.'
      }
    }
  },
  {
    name: 'focusStyles',
    props: {
      'options.theme': {
        required: true,
        type: 'IGardenTheme',
        description: 'Provides values used to resolve the desired colors'
      },
      '[options.color]': {
        type: 'Object',
        defaultValue: "{ variable: 'border.primaryEmphasis' }",
        description:
          'Provides an object with [getColor](#getcolor) parameters used to determine the focus ring color'
      },
      '[options.shadowWidth]': {
        type: 'string',
        defaultValue: "'md'",
        description:
          'Provides a theme object [shadowWidth](/components/theme-object#shadowwidths) key for the cumulative width of the `box-shadow`'
      },
      '[options.spacerColor]': {
        type: 'Object',
        defaultValue: "{ variable: 'background.default' }",
        description:
          'Provides an object with [getColor](#getcolor) parameters used to determine the spacer color'
      },
      '[options.spacerWidth]': {
        type: 'string',
        defaultValue: "'xs'",
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
    name: 'getCheckeredBackground',
    props: {
      theme: {
        required: true,
        type: 'IGardenTheme',
        description: 'Provides information for pattern color and LTR/RTL layout'
      },
      size: {
        required: true,
        type: 'number',
        description: 'Provides the pixel size of the checkered pattern'
      },
      overlay: {
        type: 'string',
        description:
          'Specifies color with transparency or `linear-gradient()` overlay to apply on top of the checkered pattern'
      },
      positionY: {
        type: 'number',
        defaultValue: 0,
        description: 'Adjusts vertical position for starting the pattern'
      },
      repeat: {
        type: "'repeat' | 'repeat-x'",
        defaultValue: "'repeat'",
        description:
          "Sets a repeat value for the pattern; either `'repeat'` or `'repeat-x'` (default `'repeat'`)"
      }
    }
  },
  {
    name: 'getColor',
    props: {
      'options.theme': {
        required: true,
        type: 'IGardenTheme',
        description: 'Provides values used to resolve the desired color'
      },
      '[options.variable]': {
        type: 'string',
        description:
          "Specifies a [variable](/components/theme-object#variables) key (`'background.default'`, for example) used to resolve a color value for the theme [color base](/components/theme-object#base)"
      },
      '[options.hue]': {
        type: 'string',
        description:
          'Provides a theme object [palette](/components/theme-object#palette) hue or [color](/components/theme-object#hues) key, or any valid CSS color notation'
      },
      '[options.shade]': {
        type: 'number',
        defaultValue: '700 (light) | 500 (dark)',
        description: 'Selects a shade for the given hue'
      },
      '[options.offset]': {
        type: 'number',
        description:
          'Adjusts the shade by a positive or negative value. Works best used along with a `variable` key to make interaction (`:hover` or `:active`, for example) adjustments.'
      },
      '[options.transparency]': {
        type: 'number',
        description:
          'Sets transparency using a theme [opacity](/components/theme-object#opacity) key or an alpha channel between 0 and 1'
      },
      '[options.dark]': {
        type: 'Object',
        description:
          'Supplies an object with optional `hue`, `shade`, `offset`, and `transparency` values to be used in dark mode'
      },
      '[options.light]': {
        type: 'Object',
        description:
          'Supplies an object with optional `hue`, `shade`, `offset`, and `transparency` values to be used in light mode'
      }
    }
  },
  {
    name: 'getColorV8',
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
      'options.theme': {
        required: true,
        type: 'IGardenTheme',
        defaultValue: 'DEFAULT_THEME',
        description: 'Provides values used to resolve the desired colors'
      },
      '[options.color]': {
        type: 'Object',
        defaultValue: "{ variable: 'border.primaryEmphasis' }",
        description:
          'Provides an object with [getColor](#getcolor) parameters used to determine the focus ring color'
      },
      '[options.shadowWidth]': {
        type: 'string',
        defaultValue: "'md'",
        description:
          'Provides a theme object [shadowWidth](/components/theme-object#shadowwidths) key for the cumulative width of the `box-shadow`'
      },
      '[options.spacerColor]': {
        type: 'Object',
        defaultValue: "{ variable: 'background.default' }",
        description:
          'Provides an object with [getColor](#getcolor) parameters used to determine the spacer color'
      },
      '[options.spacerWidth]': {
        type: 'string',
        defaultValue: "'xs'",
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
  }
];

export default components;
