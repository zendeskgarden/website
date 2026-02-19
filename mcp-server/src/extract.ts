/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';
import matter from 'gray-matter';
import yaml from 'js-yaml';

/** Absolute path to the GardenWebsite project root */
const ROOT = path.resolve(import.meta.dirname, '../..');

/** Absolute path to the data output directory */
const DATA_DIR = path.resolve(import.meta.dirname, '../data');

/* ---------------------------------------------------------------------------
 * Types
 * --------------------------------------------------------------------------- */

interface PageData {
  title: string;
  description: string;
  package?: string;
  components?: string[];
  subcomponents?: string[];
  url: string;
  filePath: string;
  body: string;
}

interface NavItem {
  id?: string;
  title: string;
  items?: NavItem[];
}

interface ExampleFile {
  name: string;
  code: string;
}

interface AccessibilityEntry {
  page: string;
  url: string;
  content: string;
}

/* ---------------------------------------------------------------------------
 * extractPages
 * --------------------------------------------------------------------------- */

async function extractPages(): Promise<PageData[]> {
  const pattern = 'src/pages/**/*.mdx';
  const files = await glob(pattern, { cwd: ROOT });
  const pages: PageData[] = [];

  for (const filePath of files) {
    const absolutePath = path.join(ROOT, filePath);
    const raw = fs.readFileSync(absolutePath, 'utf-8');
    const { data: frontmatter, content } = matter(raw);

    // Derive URL path: src/pages/components/button.mdx -> /components/button
    // src/pages/components/index.mdx -> /components
    let url = filePath
      .replace(/^src\/pages/, '')
      .replace(/\.mdx$/, '');

    if (url.endsWith('/index')) {
      url = url.replace(/\/index$/, '') || '/';
    }

    pages.push({
      title: frontmatter.title ?? '',
      description: frontmatter.description ?? '',
      package: frontmatter.package,
      components: frontmatter.components,
      subcomponents: frontmatter.subcomponents,
      url,
      filePath,
      body: content
    });
  }

  return pages;
}

/* ---------------------------------------------------------------------------
 * extractNavigation
 * --------------------------------------------------------------------------- */

async function extractNavigation(): Promise<Record<string, NavItem[]>> {
  const navDir = path.join(ROOT, 'content/nav');
  const files = await glob('*.yml', { cwd: navDir });
  const navigation: Record<string, NavItem[]> = {};

  for (const file of files) {
    const absolutePath = path.join(navDir, file);
    const raw = fs.readFileSync(absolutePath, 'utf-8');
    const parsed = yaml.load(raw) as NavItem[];
    const sectionName = path.basename(file, '.yml');

    navigation[sectionName] = parsed;
  }

  return navigation;
}

/* ---------------------------------------------------------------------------
 * extractExamples
 * --------------------------------------------------------------------------- */

async function extractExamples(): Promise<Record<string, ExampleFile[]>> {
  const examplesDir = path.join(ROOT, 'src/examples');
  const entries = fs.readdirSync(examplesDir, { withFileTypes: true });
  const examples: Record<string, ExampleFile[]> = {};

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const dirPath = path.join(examplesDir, entry.name);
    const tsxFiles = await glob('*.tsx', { cwd: dirPath });

    if (tsxFiles.length === 0) continue;

    examples[entry.name] = tsxFiles.sort().map(fileName => ({
      name: fileName,
      code: fs.readFileSync(path.join(dirPath, fileName), 'utf-8')
    }));
  }

  return examples;
}

/* ---------------------------------------------------------------------------
 * extractAccessibility
 * --------------------------------------------------------------------------- */

function extractAccessibility(
  pages: PageData[]
): Record<string, AccessibilityEntry> {
  const accessibility: Record<string, AccessibilityEntry> = {};

  // Match ## Accessibility or ### Accessibility at the start of a line
  const sectionRegex = /^(#{2,3})\s+Accessibility\s*$/m;

  for (const page of pages) {
    const match = sectionRegex.exec(page.body);

    if (!match) continue;

    const headingLevel = match[1].length; // 2 or 3
    const startIndex = match.index + match[0].length;

    // Find the next heading of equal or higher (fewer #) level
    const remainingContent = page.body.slice(startIndex);
    const nextHeadingPattern = new RegExp(
      `^#{1,${headingLevel}}\\s+(?!#)`,
      'm'
    );
    const nextHeading = nextHeadingPattern.exec(remainingContent);

    const sectionContent = nextHeading
      ? remainingContent.slice(0, nextHeading.index).trim()
      : remainingContent.trim();

    // Key by the last segment of the page URL path
    const key = page.url.split('/').filter(Boolean).pop() ?? page.url;

    accessibility[key] = {
      page: page.title,
      url: page.url,
      content: sectionContent
    };
  }

  return accessibility;
}

/* ---------------------------------------------------------------------------
 * main
 * --------------------------------------------------------------------------- */

async function main(): Promise<void> {
  // Ensure data directory exists
  fs.mkdirSync(DATA_DIR, { recursive: true });

  console.log('Extracting pages...');
  const pages = await extractPages();
  fs.writeFileSync(
    path.join(DATA_DIR, 'pages.json'),
    JSON.stringify(pages, null, 2)
  );
  console.log(`  -> ${pages.length} pages extracted`);

  console.log('Extracting navigation...');
  const navigation = await extractNavigation();
  fs.writeFileSync(
    path.join(DATA_DIR, 'navigation.json'),
    JSON.stringify(navigation, null, 2)
  );
  console.log(
    `  -> ${Object.keys(navigation).length} nav sections extracted`
  );

  console.log('Extracting examples...');
  const examples = await extractExamples();
  fs.writeFileSync(
    path.join(DATA_DIR, 'examples.json'),
    JSON.stringify(examples, null, 2)
  );
  console.log(
    `  -> ${Object.keys(examples).length} example sets extracted`
  );

  console.log('Extracting accessibility...');
  const accessibility = extractAccessibility(pages);
  fs.writeFileSync(
    path.join(DATA_DIR, 'accessibility.json'),
    JSON.stringify(accessibility, null, 2)
  );
  console.log(
    `  -> ${Object.keys(accessibility).length} accessibility entries extracted`
  );

  console.log('\nDone. Data written to', DATA_DIR);
}

main().catch(err => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
