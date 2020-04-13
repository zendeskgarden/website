/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export const copyToClipboard = (content: string) => {
  const proxyElement = document.createElement('textarea');

  proxyElement.style.cssText = `border:none;outline:none;boxShadow:none;
  position:absolute;top:0;left:-9999px;`;
  document.body.appendChild(proxyElement);
  proxyElement.value = content;
  proxyElement.select();
  document.execCommand('copy');
  proxyElement.remove();
};
