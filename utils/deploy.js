#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const envalid = require('envalid');
const garden = require('@zendeskgarden/scripts');
const path = require('path');

envalid.cleanEnv(process.env, {
  GITHUB_TOKEN: envalid.str(),
  NETLIFY_SITE_ID: envalid.str(),
  NETLIFY_TOKEN: envalid.str()
});

(async () => {
  try {
    const dir = path.resolve(__dirname, '..', 'public');
    const branch = await garden.githubBranch();
    const production = branch === 'main';
    const repository = await garden.githubRepository();
    const commit = await garden.githubCommit();
    const message = `https://github.com/${repository.owner}/${repository.repo}/commit/${commit}`;
    const command = async () => {
      const result = await garden.netlifyDeploy({
        dir,
        production,
        message
      });

      return result;
    };

    const url = await garden.githubDeploy({ command, production });

    /* eslint-disable-next-line no-console */
    console.log(`Deployed to ${url}`);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);
    process.exitCode = 1;
  }
})();
