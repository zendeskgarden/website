/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'node:fs';
import path from 'node:path';

/* ---------------------------------------------------------------------------
 * Types – must match the shapes produced by extract.ts
 * --------------------------------------------------------------------------- */

export interface PageData {
  url: string;
  filePath: string;
  title: string;
  description: string;
  package?: string;
  components?: string[];
  subcomponents?: string[];
  body: string;
}

export interface NavItem {
  id?: string;
  title: string;
  items?: NavItem[];
}

export interface ExampleFile {
  name: string;
  code: string;
}

export interface AccessibilityEntry {
  page: string;
  url: string;
  content: string;
}

export interface ComponentData {
  name: string;
  description: string;
  package: string;
  version: string;
  props: Record<string, unknown>;
  extends?: string;
  path: string;
  subcomponents: string[];
}

export interface GardenData {
  pages: PageData[];
  navigation: Record<string, NavItem[]>;
  examples: Record<string, ExampleFile[]>;
  accessibility: Record<string, AccessibilityEntry>;
  components: ComponentData[];
}

/* ---------------------------------------------------------------------------
 * Data directory
 * --------------------------------------------------------------------------- */

const DATA_DIR = path.resolve(import.meta.dirname, '../../data');

/* ---------------------------------------------------------------------------
 * loadJSON helper
 * --------------------------------------------------------------------------- */

/**
 * Reads and parses a JSON file from the data directory.
 * Returns `fallback` and logs a warning when the file is missing.
 */
function loadJSON<T>(filename: string, fallback: T): T {
  const filePath = path.join(DATA_DIR, filename);

  if (!fs.existsSync(filePath)) {
    console.warn(
      `Warning: data file not found – ${filePath}. ` +
        'Run the extraction script first (npm run extract).'
    );

    return fallback;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');

  return JSON.parse(raw) as T;
}

/* ---------------------------------------------------------------------------
 * loadGardenData
 * --------------------------------------------------------------------------- */

/**
 * Loads all extracted Garden data from the JSON files produced by extract.ts.
 */
export function loadGardenData(): GardenData {
  return {
    pages: loadJSON<PageData[]>('pages.json', []),
    navigation: loadJSON<Record<string, NavItem[]>>('navigation.json', {}),
    examples: loadJSON<Record<string, ExampleFile[]>>('examples.json', {}),
    accessibility: loadJSON<Record<string, AccessibilityEntry>>(
      'accessibility.json',
      {}
    ),
    components: loadJSON<ComponentData[]>('components.json', [])
  };
}
