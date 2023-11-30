/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { GatsbyNode } from 'gatsby';
import { createNodeHelpers } from 'gatsby-node-helpers';
import {
  getGardenReactVersion,
  generateGardenReactDoctypes,
  generateGardenReactPackages
} from './utils';

// graphql types
const TYPE_PREFIX = 'Garden';
const GARDEN_REACT_COMPONENT_ID = 'ReactComponent';
const GARDEN_REACT_COMPONENT_PACKAGE_ID = 'ReactPackage';
// identifiers
const PLUGIN_NAME = 'garden-docgen';
const GATSBY_PLUGIN_NAME = `gatsby-source-${PLUGIN_NAME}`;
const CACHE_PREFIX = `cache-${PLUGIN_NAME}`;
// cache keys
let packagesCacheKey = `${CACHE_PREFIX}-packages`;
let componentsCacheKey = `${CACHE_PREFIX}-components`;

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = async ({
  tracing,
  reporter,
  cache
}) => {
  const span = tracing.startSpan(`${GATSBY_PLUGIN_NAME}:bootstrap`);

  try {
    span.setTag(PLUGIN_NAME, 'version');
    const version = getGardenReactVersion();

    packagesCacheKey = `${packagesCacheKey}-${version}`;
    componentsCacheKey = `${componentsCacheKey}-${version}`;

    reporter.info(`load documentation types for Garden react components ${`v${version}`}`);

    // eslint-disable-next-line no-negated-condition
    if (!(await cache.get(packagesCacheKey))) {
      span.setTag(PLUGIN_NAME, 'packages');
      const packages = await generateGardenReactPackages();

      reporter.info(
        `loaded Garden package information from source for ${`${packages!.length}`} packages`
      );

      span.setTag(PLUGIN_NAME, 'caching-packages');
      await cache.set(packagesCacheKey, packages);
    } else {
      reporter.info('loaded Garden component packages from cache');
    }

    // eslint-disable-next-line no-negated-condition
    if (!(await cache.get(componentsCacheKey))) {
      span.setTag(PLUGIN_NAME, 'docgen');
      const docTypes = await generateGardenReactDoctypes();

      reporter.info(
        `generated Garden documentation types from source for ${`${docTypes!.length}`} components`
      );

      span.setTag(PLUGIN_NAME, 'caching-docgen');
      await cache.set(componentsCacheKey, docTypes);
    } else {
      reporter.info('loaded Garden component documentation types from cache');
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message as string;

    span.log({ error: true, message: errorMessage });

    reporter.panic(errorMessage, error as Error);
  }

  span.finish();
};

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  cache,
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions;
  const { createNodeFactory } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  const packages = await cache.get(packagesCacheKey);
  const gardenPackageNode = createNodeFactory(GARDEN_REACT_COMPONENT_PACKAGE_ID);

  await Promise.all(packages.map((node: any) => createNode(gardenPackageNode(node))));

  const components = await cache.get(componentsCacheKey);
  const gardenComponentNode = createNodeFactory(GARDEN_REACT_COMPONENT_ID);

  await Promise.all(components.map((node: any) => createNode(gardenComponentNode(node))));
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createTypes } = actions;

  const { createTypeName } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  const gardenPackageTypeName = createTypeName(GARDEN_REACT_COMPONENT_PACKAGE_ID);
  const gardenComponentTypeName = createTypeName(GARDEN_REACT_COMPONENT_ID);

  createTypes([
    `type ${gardenPackageTypeName} implements Node @dontInfer {
      version: String
      name: String
      description: String
      components: [${gardenComponentTypeName}] @link(from: "name")
    }`,
    `type ${gardenComponentTypeName} implements Node @dontInfer {
      version: String
      name: String
      description: String
      extends: String
      props: JSON
      path: String
      packageName: String
      subcomponents: [${gardenComponentTypeName}] @link(by: "name")
      package: ${gardenPackageTypeName} @link(by: "name", from: "packageName")
    }`
  ]);
};
