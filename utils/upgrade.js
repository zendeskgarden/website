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

const pkg = require('../package.json');

async function getVersionForPackage(packageName) {
  /**
   * for npm variant of getting the latest version:
   * const latest = (await execa('npm', ['show', packages[0], 'version'])).stdout;
   */

  const info = JSON.parse((await execa('yarn', ['info', `${packageName}@latest`, '--json'])).stdout)
    .data['dist-tags'];

  // eslint-disable-next-line no-console
  console.info(chalk.bold('latest version found:'), chalk.bold.green(info.latest), '\n');

  return info;
}

async function setReactPackagesGitModuleTag(version) {
  const options = { cwd: path.resolve('react-components') };

  // eslint-disable-next-line no-console
  console.info(chalk.bold('fetching latest git tags\n'));

  await execa('git', ['fetch', '--all', '--tags'], options);

  // eslint-disable-next-line no-console
  console.info(chalk.bold(`checking out git tag ${chalk.green(`v${version}`)}\n`));

  await execa('git', ['checkout', `tags/v${version}`], options);
}

async function installReactComponentPackages(packages, version) {
  const packagesToInstall = packages.map(
    reactComponentsPackage => `${reactComponentsPackage}@${version}`
  );

  // eslint-disable-next-line no-console
  console.info(
    chalk.bold(
      `installing ${chalk.green(packages.length)} 'react-components' packages @ ${chalk.green(
        version
      )}\n`
    )
  );

  await execa('yarn', ['add', '-D'].concat(packagesToInstall), { stdio: 'inherit' });
}

(async function main() {
  // eslint-disable-next-line no-console
  console.info(chalk.bold('\nupdating `react-components` repository\n'));

  try {
    const packages = Object.keys(pkg.devDependencies).filter(pkgName =>
      pkgName.startsWith('@zendeskgarden/react-')
    );

    const { latest } = await getVersionForPackage(packages[0]);

    await setReactPackagesGitModuleTag(latest);

    await installReactComponentPackages(packages, latest);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
})();
