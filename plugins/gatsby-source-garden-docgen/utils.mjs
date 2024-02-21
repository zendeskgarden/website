/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cmdDocgen } from '@zendeskgarden/scripts';
import { join, resolve, sep } from 'path';
import { readdirSync, lstatSync, readFileSync } from 'fs';

export function getGardenReactComponentsRootPath() {
  return resolve(process.cwd(), 'react-components');
}

export function getGardenReactVersion() {
  const lernaJsonPath = join(getGardenReactComponentsRootPath(), 'lerna.json');

  const { version } = JSON.parse(readFileSync(lernaJsonPath, { encoding: 'utf8' }));

  return version;
}

export async function generateGardenReactDoctypes() {
  const packagesRootPath = join(getGardenReactComponentsRootPath(), 'packages');
  const elementsGlobPath = join(packagesRootPath, join('**', 'elements', '**'));
  const pacakgesTrailingPath = `${packagesRootPath}${sep}`;

  const components = await cmdDocgen({ paths: elementsGlobPath });

  return components.map(component => ({
    ...component,
    id: component.file,
    path: component.file.replace(pacakgesTrailingPath, ''),
    subcomponents: components
      .filter(({ name }) => name.startsWith(`${component.name}.`))
      .map(({ name }) => name),
    packageName: `@zendeskgarden/react-${
      component.file.replace(pacakgesTrailingPath, '').split('/')[0]
    }`
  }));
}

export function generateGardenReactPackages() {
  const packagesRootPath = join(getGardenReactComponentsRootPath(), 'packages');

  return readdirSync(packagesRootPath)
    .filter(file => {
      if (file === '.template') {
        return false;
      }

      return lstatSync(join(packagesRootPath, file)).isDirectory();
    })
    .map(file =>
      JSON.parse(readFileSync(join(packagesRootPath, file, 'package.json'), { encoding: 'utf-8' }))
    )
    .map(pkg => ({
      ...pkg,
      id: pkg.name
    }));
}
