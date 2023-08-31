#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const resolve = require('path').resolve;

(async () => {
  const { execa } = await import('execa');
  const { default: ora } = await import('ora');
  const spinner = ora();

  try {
    spinner.info('Upgrading @zendeskgarden/react-* dependencies...').start();

    await execa('yarn', [
      'upgrade',
      '--scope',
      '@zendeskgarden',
      '--pattern',
      'react',
      '--latest',
      '--ignore-scripts'
    ]);

    spinner.info('Syncing react-components submodule...');

    const { stdout } = await execa('yarn', ['info', '@zendeskgarden/react-theming', '--json']);
    const json = JSON.parse(stdout);
    const latest = json.data['dist-tags'].latest;
    const options = { cwd: resolve('react-components') };

    await execa('git', ['fetch', '--all', '--tags'], options);
    await execa('git', ['checkout', `tags/v${latest}`], options);

    spinner.succeed(`Success.\nUpgraded react-components to ${latest}.`);
  } catch (error) {
    spinner.fail(error.message || error);
    process.exitCode = 1;
  } finally {
    spinner.stop();
  }
})();
