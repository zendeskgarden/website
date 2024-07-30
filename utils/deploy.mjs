#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import envalid from 'envalid';
import {
  cmdDu,
  githubBranch,
  githubCommit,
  githubDeploy,
  githubRepository,
  netlifyBandwidth,
  netlifyDeploy
} from '@zendeskgarden/scripts';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

envalid.cleanEnv(process.env, {
  GITHUB_TOKEN: envalid.str(),
  NETLIFY_SITE_ID: envalid.str(),
  NETLIFY_TOKEN: envalid.str()
});

(async () => {
  try {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const dir = resolve(currentDir, '..', 'public');
    const branch = await githubBranch();
    const production = branch === 'main';
    const available = production ? Infinity : (await netlifyBandwidth()).available;
    const usage = production ? 0 : await cmdDu(dir);
    let url;

    if (available > usage) {
      const repository = await githubRepository();
      const commit = await githubCommit();
      const message = `https://github.com/${repository.owner}/${repository.repo}/commit/${commit}`;
      const command = async () => {
        const result = await netlifyDeploy({
          dir,
          production,
          message
        });

        return result;
      };

      url = await githubDeploy({ command, production });
    } else {
      throw new Error(
        `Insufficient Netlify bandwidth: ${available} bytes available, ${usage} bytes required.`
      );
    }

    /* eslint-disable-next-line no-console */
    console.log(`Deployed to ${url}`);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);
    process.exitCode = 1;
  }
})();
