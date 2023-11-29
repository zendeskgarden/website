/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import { BinaryToTextEncoding, createHash } from 'crypto';
import { parse } from 'yaml';

export function hashFileContent(
  content: string,
  algorithm = 'md5',
  encoding: BinaryToTextEncoding = 'hex'
) {
  return createHash(algorithm).update(content).digest(encoding);
}

export function loadYamlFile(pathName: string) {
  const contentPathName = resolve(process.cwd(), join('content', pathName));
  const text = readFileSync(contentPathName, 'utf-8');
  const hash = hashFileContent(text);
  const data = parse(text);

  return { data, hash };
}

export function getFigmaAssetsMetadata() {
  const {
    data: { fileId, nodeIds, scale },
    hash
  } = loadYamlFile('figma/assets.yml');

  return { fileId, nodeIds, scale, hash };
}

export function getNewsMetadata() {
  const { data: news, hash } = loadYamlFile('news/news.yml');

  return { news, hash };
}

export function getNavigationMetadata() {
  const [
    { data: components, hash: hash1 },
    { data: content, hash: hash2 },
    { data: design, hash: hash3 },
    { data: patterns, hash: hash4 }
  ] = ['nav/components.yml', 'nav/content.yml', 'nav/design.yml', 'nav/patterns.yml'].map(
    pathName => loadYamlFile(pathName)
  );

  return { components, content, design, patterns, hash: [hash1, hash2, hash3, hash4].join('-') };
}

export async function fetchFigmaAPI(apiPath: string, { figmaApiToken }: { figmaApiToken: string }) {
  const baseUrl = 'https://api.figma.com/v1';
  const headers = {
    'Content-Type': 'application/json',
    'X-FIGMA-TOKEN': figmaApiToken
  };

  const response = await fetch(`${baseUrl}/${apiPath}`, { headers });

  if (response.status !== 200) {
    throw new Error(`Failed to fetch from the Figma API (status code: ${response.status})`);
  }

  return response.json();
}

export async function fetchFigmaFileDocument({
  figmaApiToken,
  fileId
}: {
  figmaApiToken: string;
  fileId: string;
}) {
  const { document, lastModified, version } = await fetchFigmaAPI(`files/${fileId}`, {
    figmaApiToken
  });

  return { document, lastModified, version };
}

export async function fetchFigmaFileNodes({
  figmaApiToken,
  fileId,
  nodeIds
}: {
  figmaApiToken: string;
  fileId: string;
  nodeIds: string[];
}) {
  const idsParam = nodeIds.join(',');
  const { nodes } = await fetchFigmaAPI(`files/${fileId}/nodes?ids=${idsParam}`, {
    figmaApiToken
  });

  return { nodes };
}

export async function fetchFigmaImages({
  figmaApiToken,
  fileId,
  nodeIds,
  scale
}: {
  figmaApiToken: string;
  fileId: string;
  nodeIds: string[];
  scale: number;
}) {
  const idsParam = nodeIds.join(',');
  const { images } = await fetchFigmaAPI(`images/${fileId}?ids=${idsParam}&scale=${scale}`, {
    figmaApiToken
  });

  return { images };
}

export function transformNavigation(nav, { createNodeId } = {}) {
  return Object.entries(nav).map(([group, entries]) => {
    function transformNavEntry(node, parent) {
      if (group) {
        node.group = group;
      }

      if (node.id) {
        node.url = `${node.id}`;
      }

      node.id = [
        `[${group}]`,
        [].concat(parent && parent.title ? parent.title : [], node.title).join('-')
      ]
        .join(':')
        .toLowerCase();

      if (parent) {
        node.parent = parent.id;
      }

      if (node.items && node.items.length > 0) {
        node.items = node.items.map(child => transformNavEntry(child, node));
        node.children = node.items.map(child => child.id);
      }

      return {
        id: createNodeId(node.id),
        title: node.title,
        url: node.url,
        group: node.group,
        root: !node.parent,
        parent: node.parent,
        children: node.children,
        items: node.items
      };
    }

    return entries.map(entry => transformNavEntry(entry));
  });
}
