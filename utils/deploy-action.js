#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const envalid = require('envalid');
const path = require('path');

const deploy = require('./deploy');

envalid.cleanEnv(process.env, {
  FIGMA_TOKEN: envalid.str()
});

(async () => {
  const { GITHUB_WORKSPACE, GITHUB_REF_NAME: branch } = process.env;
  const dir = path.resolve(GITHUB_WORKSPACE, 'public');

  await deploy({
    branch,
    dir
  });
})();
