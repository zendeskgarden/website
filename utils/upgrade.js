#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const chalk = require('chalk');
const execa = require('execa');
const ora = require('ora');

const pkg = require('../package.json');

const printCommandTitle = () => chalk.bold('updating `react-components` repository and packages');
const printSuccessStatus = () => chalk.bold(`Successfully updated "react-components"`);
const printErrorStatus = error => chalk.bold.red(error.message || 'something went wrong');
const printLatestVersion = ({ version } = {}) =>
  `${chalk.bold('latest version found:')} ${chalk.bold.green(version)}\n`;
const printStatusFetchingTags = () => chalk.bold('fetching latest git tags');
const printStatusCheckoutTag = ({ version }) =>
  chalk.bold(`checking out git tag ${chalk.green(`v${version}`)}\n`);
const printStatusInstallingPackages = ({ packages, version }) =>
  chalk.bold(
    `installing ${chalk.green(packages.length)} 'react-components' packages @ ${chalk.green(
      version
    )}`
  );

(async function main() {
  const spinner = ora({
    prefixText: chalk.bold.green('[GARDEN]:')
  });

  try {
    spinner.info(printCommandTitle());

    const packages = Object.keys(pkg.devDependencies).filter(pkgName =>
      pkgName.startsWith('@zendeskgarden/react-')
    );

    /**
     * since all the packages are versioned together, we only need to check
     * one package from the batch to get the latest version that was published
     *
     * for npm variant of getting the latest version:
     * const latest = (await execa('npm', ['show', packages[0], 'version'])).stdout;
     */

    const { latest: version } = JSON.parse(
      (await execa('yarn', ['info', `${packages[0]}@latest`, '--json'])).stdout
    ).data['dist-tags'];

    spinner.info(printLatestVersion({ version }));

    /**
     * we set the git submodule with the tag that matches the latest version
     */
    const options = { cwd: path.resolve('react-components') };

    spinner.info(printStatusFetchingTags());

    await execa('git', ['fetch', '--all', '--tags'], options);

    spinner.info(printStatusCheckoutTag({ version }));

    await execa('git', ['checkout', `tags/v${version}`], options);

    /**
     * final step is to install the latest version of the components
     */
    const packagesToInstall = packages.map(
      reactComponentsPackage => `${reactComponentsPackage}@${version}`
    );

    spinner.info(printStatusInstallingPackages({ packages, version }));
    spinner.start(`running command 'yarn add ..' for packages`);

    // we pass in the ignore scripts to prevent rebuilding the website and updating the submodule
    await execa('yarn', ['add', '-D'].concat(packagesToInstall, '--ignore-scripts'));

    spinner.succeed(printSuccessStatus());
  } catch (error) {
    spinner.fail(printErrorStatus(error));
    process.exitCode = 1;
  } finally {
    spinner.stop();
  }
})();
