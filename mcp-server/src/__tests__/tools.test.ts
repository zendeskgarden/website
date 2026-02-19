/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { describe, expect, it } from 'vitest';
import { loadGardenData } from '../data/loader.js';

describe('loadGardenData', () => {
  const data = loadGardenData();

  it('loads all data files successfully', () => {
    expect(data).toHaveProperty('pages');
    expect(data).toHaveProperty('navigation');
    expect(data).toHaveProperty('examples');
    expect(data).toHaveProperty('accessibility');
    expect(data).toHaveProperty('components');
  });

  it('pages array has >0 entries', () => {
    expect(data.pages.length).toBeGreaterThan(0);
  });

  it('navigation has >0 sections', () => {
    expect(Object.keys(data.navigation).length).toBeGreaterThan(0);
  });

  it('examples has >0 component sets', () => {
    expect(Object.keys(data.examples).length).toBeGreaterThan(0);
  });

  it('button page exists at /components/button with correct title and package', () => {
    const buttonPage = data.pages.find(p => p.url === '/components/button');

    expect(buttonPage).toBeDefined();
    expect(buttonPage!.title).toBe('Button');
    expect(buttonPage!.package).toBe('@zendeskgarden/react-buttons');
  });

  it('button examples exist and include ButtonDefault.tsx', () => {
    expect(data.examples).toHaveProperty('button');
    expect(data.examples.button.length).toBeGreaterThan(0);

    const names = data.examples.button.map(e => e.name);

    expect(names).toContain('ButtonDefault.tsx');
  });

  it('components array has >0 entries', () => {
    expect(data.components.length).toBeGreaterThan(0);
  });
});
