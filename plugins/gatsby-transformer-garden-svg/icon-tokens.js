/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fs = require('fs');
const path = require('path');

module.exports = (function extractIconTokens() {
  // gets the csv of the tokens for the icons
  const csv = fs.readFileSync(path.resolve(__dirname, 'icon-tokens.csv')).toString();
  //  we skip the first line in a CSV file since that is the header
  const [, ...tokens] = csv.split('\n');
  // assumes all icon names are unique, and map 1:1 with a token
  // in the future in case of icon name having multiple tokens,
  // we would need [iconName1, iconName2]: token as a mapping.
  // if we wanted to add multiple tokens to an icon
  // we would need [iconName1, iconName2]: [token1, token2] as a mapping.
  const tokenMap = new Map(tokens.map(pair => pair.replace('\r', '').split(',').reverse()));

  return {
    tokens: tokenMap,
    get(iconName) {
      const icon = iconName.replace('-stroke', '').replace('-fill', '');

      return tokenMap.get(icon) || '';
    }
  };
})();
