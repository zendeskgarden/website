/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export default {
  'code[class*="language-"]': {
    color: '#9cdcfe',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    color: '#c5c8c6',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
    background: '#1e1e1e'
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#1e1e1e',
    padding: '.1em',
    borderRadius: '.3em'
  },
  comment: {
    color: '#6a9955'
  },
  prolog: {
    color: '#6a9955'
  },
  doctype: {
    color: '#6a9955'
  },
  cdata: {
    color: '#6a9955'
  },
  punctuation: {
    color: '#d4d4d4'
  },
  '.namespace': {
    Opacity: '.7'
  },
  property: {
    color: '#ce9178'
  },
  keyword: {
    color: '#c586c0'
  },
  tag: {
    color: '#9cdcfe'
  },
  'class-name': {
    color: '#4EC9B0'
  },
  boolean: {
    color: '#569cd6'
  },
  constant: {
    color: '#99CC99'
  },
  symbol: {
    color: '#f92672'
  },
  deleted: {
    color: '#ce9178'
  },
  number: {
    color: '#b5cea8'
  },
  selector: {
    color: '#A8FF60'
  },
  'attr-name': {
    color: '@'
  },
  string: {
    color: '#ce9178'
  },
  char: {
    color: '#A8FF60'
  },
  builtin: {
    color: '#4ec9b0'
  },
  inserted: {
    color: '#A8FF60'
  },
  variable: {
    color: '#C6C5FE'
  },
  operator: {
    color: '#d4d4d4'
  },
  entity: {
    color: '#FFFFB6',
    cursor: 'help'
  },
  url: {
    color: '#96CBFE'
  },
  '.language-css .token.string': {
    color: '#99CC99'
  },
  '.style .token.string': {
    color: '#99CC99'
  },
  atrule: {
    color: '#F9EE98'
  },
  'attr-value': {
    color: '#ce9178'
  },
  function: {
    color: '#dcdcaa'
  },
  regex: {
    color: '#E9C062'
  },
  important: {
    color: '#fd971f',
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  }
};
