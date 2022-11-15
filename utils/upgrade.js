#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const { spawnSync } = require('child_process');

const pkg = require('../package.json');

(({ submodule, containers, components }) => {
  if (submodule) {
    spawnSync('git', ['pull'], { cwd: path.resolve('react-components'), stdio: 'inherit' });
  }

  const packagesToInstall = [];

  if (containers) {
    const reactContainersVersion = 'latest';
    const reactContainers = Object.keys(pkg.devDependencies)
      .filter(pkgName => pkgName.startsWith('@zendeskgarden/container-'))
      .map(reactContainersPackage => `${reactContainersPackage}@${reactContainersVersion}`);

    packagesToInstall.push(...reactContainers);
  }

  if (components) {
    const reactComponentsVersion = 'latest';
    const reactComponents = Object.keys(pkg.devDependencies)
      .filter(pkgName => pkgName.startsWith('@zendeskgarden/react-'))
      .map(reactComponentsPackage => `${reactComponentsPackage}@${reactComponentsVersion}`);

    packagesToInstall.push(...reactComponents);
  }

  if (components || containers) {
    spawnSync('yarn', ['add'].concat(packagesToInstall), { stdio: 'inherit' });
  }
})({
  submodule: process.argv.includes('--submodule'),
  containers: process.argv.includes('--containers'),
  components: process.argv.includes('--components')
});
