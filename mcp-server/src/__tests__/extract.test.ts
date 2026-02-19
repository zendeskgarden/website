/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const DATA_DIR = path.resolve(import.meta.dirname, '../../data');

function readJSON(filename: string): unknown {
  const filePath = path.join(DATA_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');

  return JSON.parse(raw);
}

describe('Extracted data files', () => {
  describe('pages.json', () => {
    it('exists and is a non-empty array', () => {
      const pages = readJSON('pages.json');

      expect(Array.isArray(pages)).toBe(true);
      expect((pages as unknown[]).length).toBeGreaterThan(0);
    });

    it('entries have url, title, and body fields', () => {
      const pages = readJSON('pages.json') as Record<string, unknown>[];

      for (const page of pages) {
        expect(page).toHaveProperty('url');
        expect(page).toHaveProperty('title');
        expect(page).toHaveProperty('body');
      }
    });
  });

  describe('navigation.json', () => {
    it('exists and is an object with a components key', () => {
      const nav = readJSON('navigation.json') as Record<string, unknown>;

      expect(typeof nav).toBe('object');
      expect(nav).not.toBeNull();
      expect(nav).toHaveProperty('components');
      expect(Array.isArray(nav.components)).toBe(true);
    });
  });

  describe('examples.json', () => {
    it('exists and is an object with a button key', () => {
      const examples = readJSON('examples.json') as Record<string, unknown>;

      expect(typeof examples).toBe('object');
      expect(examples).not.toBeNull();
      expect(examples).toHaveProperty('button');
      expect(Array.isArray(examples.button)).toBe(true);
    });

    it('button examples have name and code fields', () => {
      const examples = readJSON('examples.json') as Record<
        string,
        { name: string; code: string }[]
      >;

      for (const example of examples.button) {
        expect(example).toHaveProperty('name');
        expect(example).toHaveProperty('code');
        expect(typeof example.name).toBe('string');
        expect(typeof example.code).toBe('string');
      }
    });
  });

  describe('accessibility.json', () => {
    it('exists and is an object', () => {
      const a11y = readJSON('accessibility.json');

      expect(typeof a11y).toBe('object');
      expect(a11y).not.toBeNull();
    });
  });

  describe('components.json', () => {
    it('exists and is a non-empty array', () => {
      const components = readJSON('components.json');

      expect(Array.isArray(components)).toBe(true);
      expect((components as unknown[]).length).toBeGreaterThan(0);
    });

    it('entries have name, description, and package fields', () => {
      const components = readJSON('components.json') as Record<string, unknown>[];

      for (const component of components) {
        expect(component).toHaveProperty('name');
        expect(component).toHaveProperty('description');
        expect(component).toHaveProperty('package');
      }
    });
  });
});
