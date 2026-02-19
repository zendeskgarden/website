# Garden MCP Server Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an MCP server that exposes Garden design system data (component APIs, examples, docs, accessibility guidelines) to AI coding assistants via Streamable HTTP transport.

**Architecture:** A two-part system: (1) a data extraction script that parses MDX frontmatter/body, YAML navigation, example TSX files, and docgen output into static JSON files, and (2) a lightweight TypeScript MCP server using `@modelcontextprotocol/sdk` that loads those JSON files and exposes them as MCP tools.

**Tech Stack:** TypeScript, Node.js, `@modelcontextprotocol/sdk` v1.x, Express, Zod, gray-matter, js-yaml, vitest

**Design doc:** `docs/plans/2026-02-19-garden-mcp-server-design.md`

---

## Task 1: Scaffold mcp-server directory

**Files:**
- Create: `mcp-server/package.json`
- Create: `mcp-server/tsconfig.json`
- Modify: `.gitignore`

**Step 1: Create mcp-server/package.json**

```json
{
  "name": "@zendeskgarden/mcp-server",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "extract": "tsx src/extract.ts",
    "start": "tsx src/index.ts",
    "dev": "tsx watch src/index.ts",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.26.0",
    "express": "^4.21.0",
    "glob": "^11.0.0",
    "gray-matter": "^4.0.3",
    "js-yaml": "^4.1.0",
    "zod": "^3.25.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/js-yaml": "^4.0.9",
    "@types/node": "^22.0.0",
    "tsx": "^4.19.0",
    "typescript": "^5.9.0",
    "vitest": "^3.0.0"
  }
}
```

**Step 2: Create mcp-server/tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "declaration": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "data"]
}
```

**Step 3: Add mcp-server/data/ to .gitignore**

Append to the root `.gitignore`:

```
mcp-server/data/
mcp-server/dist/
```

**Step 4: Install dependencies**

Run: `cd mcp-server && npm install`

**Step 5: Commit**

```bash
git add mcp-server/package.json mcp-server/tsconfig.json mcp-server/package-lock.json .gitignore
git commit -m "chore: scaffold mcp-server directory"
```

---

## Task 2: Write data extraction script — MDX and YAML parsing

**Files:**
- Create: `mcp-server/src/extract.ts`

This task implements extraction of MDX frontmatter/body, YAML navigation, and example files. Docgen extraction is handled in Task 3.

**Step 1: Write the extraction script**

```typescript
// mcp-server/src/extract.ts
import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '../..');
const DATA_DIR = path.resolve(import.meta.dirname, '../data');

interface PageData {
  path: string;
  title: string;
  description: string;
  package?: string;
  components?: string[];
  subcomponents?: string[];
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

interface AccessibilityInfo {
  component: string;
  content: string;
}

function extractPages(): PageData[] {
  const mdxFiles = glob.sync('src/pages/**/*.mdx', { cwd: ROOT });
  const pages: PageData[] = [];

  for (const file of mdxFiles) {
    const fullPath = path.join(ROOT, file);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(raw);

    // Derive URL path from file path
    const urlPath = '/' + file
      .replace('src/pages/', '')
      .replace(/\/index\.mdx$/, '')
      .replace(/\.mdx$/, '');

    pages.push({
      path: urlPath,
      title: data.title || '',
      description: data.description || '',
      package: data.package,
      components: data.components,
      subcomponents: data.subcomponents,
      body: content.trim()
    });
  }

  return pages;
}

function extractNavigation(): Record<string, NavItem[]> {
  const navDir = path.join(ROOT, 'content/nav');
  const navFiles = glob.sync('*.yml', { cwd: navDir });
  const navigation: Record<string, NavItem[]> = {};

  for (const file of navFiles) {
    const section = path.basename(file, '.yml');
    const raw = fs.readFileSync(path.join(navDir, file), 'utf-8');
    const items = yaml.load(raw) as NavItem[];
    navigation[section] = items;
  }

  return navigation;
}

function extractExamples(): Record<string, ExampleFile[]> {
  const examplesDir = path.join(ROOT, 'src/examples');
  const dirs = fs.readdirSync(examplesDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const examples: Record<string, ExampleFile[]> = {};

  for (const dir of dirs) {
    const files = glob.sync('*.tsx', { cwd: path.join(examplesDir, dir) });
    if (files.length === 0) continue;

    examples[dir] = files.map(file => ({
      name: path.basename(file, '.tsx'),
      code: fs.readFileSync(path.join(examplesDir, dir, file), 'utf-8')
    }));
  }

  return examples;
}

function extractAccessibility(pages: PageData[]): Record<string, AccessibilityInfo> {
  const accessibility: Record<string, AccessibilityInfo> = {};

  for (const page of pages) {
    // Match ## Accessibility or ### Accessibility sections
    const a11yMatch = page.body.match(
      /^(#{2,3})\s+Accessibility\s*\n([\s\S]*?)(?=\n#{1,3}\s|\n*$)/m
    );

    if (a11yMatch) {
      const componentName = page.path.split('/').pop() || page.title;
      accessibility[componentName] = {
        component: page.title,
        content: a11yMatch[2].trim()
      };
    }
  }

  return accessibility;
}

async function main() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  console.log('Extracting pages...');
  const pages = extractPages();
  fs.writeFileSync(path.join(DATA_DIR, 'pages.json'), JSON.stringify(pages, null, 2));
  console.log(`  ${pages.length} pages extracted`);

  console.log('Extracting navigation...');
  const navigation = extractNavigation();
  fs.writeFileSync(path.join(DATA_DIR, 'navigation.json'), JSON.stringify(navigation, null, 2));
  console.log(`  ${Object.keys(navigation).length} sections extracted`);

  console.log('Extracting examples...');
  const examples = extractExamples();
  fs.writeFileSync(path.join(DATA_DIR, 'examples.json'), JSON.stringify(examples, null, 2));
  console.log(`  ${Object.keys(examples).length} component example sets extracted`);

  console.log('Extracting accessibility info...');
  const accessibility = extractAccessibility(pages);
  fs.writeFileSync(path.join(DATA_DIR, 'accessibility.json'), JSON.stringify(accessibility, null, 2));
  console.log(`  ${Object.keys(accessibility).length} accessibility entries extracted`);

  console.log('Done! Data written to mcp-server/data/');
}

main().catch(err => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
```

**Step 2: Run extraction to verify**

Run: `cd mcp-server && npm run extract`
Expected: JSON files created in `mcp-server/data/` with logged counts.

**Step 3: Commit**

```bash
git add mcp-server/src/extract.ts
git commit -m "feat(mcp): add data extraction script for MDX, YAML, and examples"
```

---

## Task 3: Add docgen extraction

**Files:**
- Modify: `mcp-server/src/extract.ts`

The docgen data lives in the `react-components/` git submodule. We use the same `@zendeskgarden/scripts` package the Gatsby plugin uses to extract component prop metadata.

**Step 1: Add docgen extraction function to extract.ts**

Add to `mcp-server/src/extract.ts` before the `main()` function:

```typescript
interface ComponentData {
  name: string;
  description: string;
  package: string;
  version: string;
  props: Record<string, unknown>;
  extends?: string;
  path: string;
  subcomponents: string[];
}

async function extractComponents(): Promise<ComponentData[]> {
  // Import the docgen utilities from the existing Gatsby plugin
  const utilsPath = path.join(ROOT, 'plugins/gatsby-source-garden-docgen/utils.mjs');
  const { generateGardenReactPackages, generateGardenReactDoctypes } = await import(utilsPath);

  const packages = await generateGardenReactPackages();
  const docTypes = await generateGardenReactDoctypes();

  const components: ComponentData[] = [];

  for (const doc of docTypes) {
    // Find the package this component belongs to
    const pkg = packages.find((p: { name: string }) =>
      doc.packageName === p.name || `@zendeskgarden/react-${doc.file?.split('/')[0]}` === p.name
    );

    components.push({
      name: doc.name,
      description: doc.description || '',
      package: doc.packageName || pkg?.name || '',
      version: doc.version || pkg?.version || '',
      props: doc.props || {},
      extends: doc.extends,
      path: doc.file || '',
      subcomponents: (doc.subcomponents || []).map((s: { name: string }) =>
        typeof s === 'string' ? s : s.name
      )
    });
  }

  return components;
}
```

Add to `main()`:

```typescript
  console.log('Extracting component metadata (docgen)...');
  const components = await extractComponents();
  fs.writeFileSync(path.join(DATA_DIR, 'components.json'), JSON.stringify(components, null, 2));
  console.log(`  ${components.length} components extracted`);
```

**Step 2: Run extraction to verify docgen works**

Run: `cd mcp-server && npm run extract`
Expected: `components.json` created with component prop data. Note: this may take a while on first run as docgen processes the TypeScript files.

If docgen import fails (due to missing dependencies in the plugin), fall back to a simpler approach: parse the MDX frontmatter `components` field to build a component list without full prop metadata. Add a TODO comment for docgen integration.

**Step 3: Commit**

```bash
git add mcp-server/src/extract.ts
git commit -m "feat(mcp): add docgen component metadata extraction"
```

---

## Task 4: Write data loader module

**Files:**
- Create: `mcp-server/src/data/loader.ts`

**Step 1: Write the data loader**

```typescript
// mcp-server/src/data/loader.ts
import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.resolve(import.meta.dirname, '../../data');

export interface PageData {
  path: string;
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

export interface AccessibilityInfo {
  component: string;
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
  accessibility: Record<string, AccessibilityInfo>;
  components: ComponentData[];
}

function loadJSON<T>(filename: string): T {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Data file not found: ${filePath}. Run 'npm run extract' first.`);
    return (Array.isArray(filename) ? [] : {}) as T;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function loadGardenData(): GardenData {
  return {
    pages: loadJSON<PageData[]>('pages.json'),
    navigation: loadJSON<Record<string, NavItem[]>>('navigation.json'),
    examples: loadJSON<Record<string, ExampleFile[]>>('examples.json'),
    accessibility: loadJSON<Record<string, AccessibilityInfo>>('accessibility.json'),
    components: loadJSON<ComponentData[]>('components.json')
  };
}
```

**Step 2: Commit**

```bash
git add mcp-server/src/data/loader.ts
git commit -m "feat(mcp): add data loader module"
```

---

## Task 5: Write MCP server with all tools

**Files:**
- Create: `mcp-server/src/index.ts`

**Step 1: Write the MCP server**

```typescript
// mcp-server/src/index.ts
import { randomUUID } from 'node:crypto';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import express from 'express';
import { z } from 'zod';
import { loadGardenData } from './data/loader.js';
import type { GardenData } from './data/loader.js';

function registerTools(server: McpServer, data: GardenData) {
  // list_components - List all available Garden components
  server.registerTool(
    'list_components',
    {
      title: 'List Garden Components',
      description: 'List all available Garden design system components with their names, packages, and descriptions.'
    },
    async () => ({
      content: [{
        type: 'text',
        text: JSON.stringify(
          data.components.map(c => ({
            name: c.name,
            package: c.package,
            description: c.description
          })),
          null, 2
        )
      }]
    })
  );

  // search_components - Search by name or keyword
  server.registerTool(
    'search_components',
    {
      title: 'Search Garden Components',
      description: 'Search Garden components by name or keyword. Returns matching components with descriptions and package info.',
      inputSchema: {
        query: z.string().describe('Search query (component name or keyword)')
      }
    },
    async ({ query }) => {
      const q = query.toLowerCase();
      const matches = data.components.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.package.toLowerCase().includes(q)
      );
      return {
        content: [{
          type: 'text',
          text: matches.length > 0
            ? JSON.stringify(matches.map(c => ({
                name: c.name,
                package: c.package,
                description: c.description
              })), null, 2)
            : `No components found matching "${query}".`
        }]
      };
    }
  );

  // get_component - Full component details
  server.registerTool(
    'get_component',
    {
      title: 'Get Garden Component Details',
      description: 'Get full details for a Garden component including props, package, version, and subcomponents.',
      inputSchema: {
        name: z.string().describe('Component name (e.g., "Button", "Combobox")')
      }
    },
    async ({ name }) => {
      const component = data.components.find(c =>
        c.name.toLowerCase() === name.toLowerCase()
      );
      if (!component) {
        const suggestions = data.components
          .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
          .map(c => c.name)
          .slice(0, 5);
        return {
          content: [{
            type: 'text',
            text: `Component "${name}" not found.${suggestions.length > 0 ? ` Did you mean: ${suggestions.join(', ')}?` : ''}`
          }],
          isError: true
        };
      }
      return {
        content: [{ type: 'text', text: JSON.stringify(component, null, 2) }]
      };
    }
  );

  // get_component_examples - Usage examples
  server.registerTool(
    'get_component_examples',
    {
      title: 'Get Component Examples',
      description: 'Get usage examples (TSX code) for a Garden component.',
      inputSchema: {
        name: z.string().describe('Component or example directory name (e.g., "button", "combobox")')
      }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      const examples = data.examples[key];
      if (!examples) {
        const available = Object.keys(data.examples)
          .filter(k => k.includes(key))
          .slice(0, 5);
        return {
          content: [{
            type: 'text',
            text: `No examples found for "${name}".${available.length > 0 ? ` Available: ${available.join(', ')}` : ''}`
          }],
          isError: true
        };
      }
      return {
        content: examples.map(ex => ({
          type: 'text' as const,
          text: `### ${ex.name}\n\n\`\`\`tsx\n${ex.code}\n\`\`\``
        }))
      };
    }
  );

  // search_docs - Full-text search across documentation
  server.registerTool(
    'search_docs',
    {
      title: 'Search Garden Documentation',
      description: 'Full-text search across all Garden documentation pages (components, design, patterns, content).',
      inputSchema: {
        query: z.string().describe('Search query')
      }
    },
    async ({ query }) => {
      const q = query.toLowerCase();
      const matches = data.pages
        .filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q)
        )
        .map(p => ({
          path: p.path,
          title: p.title,
          description: p.description,
          // Show a snippet of the body around the match
          snippet: getSnippet(p.body, q)
        }))
        .slice(0, 10);

      return {
        content: [{
          type: 'text',
          text: matches.length > 0
            ? JSON.stringify(matches, null, 2)
            : `No documentation found matching "${query}".`
        }]
      };
    }
  );

  // get_doc_page - Get full page content
  server.registerTool(
    'get_doc_page',
    {
      title: 'Get Documentation Page',
      description: 'Get the full content of a Garden documentation page.',
      inputSchema: {
        path: z.string().describe('Page path (e.g., "/components/button", "/design/color")')
      }
    },
    async ({ path: pagePath }) => {
      const normalized = pagePath.startsWith('/') ? pagePath : `/${pagePath}`;
      const page = data.pages.find(p => p.path === normalized);
      if (!page) {
        return {
          content: [{
            type: 'text',
            text: `Page "${pagePath}" not found. Use search_docs to find the right path.`
          }],
          isError: true
        };
      }
      return {
        content: [{
          type: 'text',
          text: `# ${page.title}\n\n${page.description}\n\n${page.body}`
        }]
      };
    }
  );

  // get_navigation - Navigation tree
  server.registerTool(
    'get_navigation',
    {
      title: 'Get Navigation Tree',
      description: 'Get the navigation tree for a section of the Garden documentation.',
      inputSchema: {
        section: z.string().describe('Section name: "components", "design", "patterns", or "content"')
      }
    },
    async ({ section }) => {
      const nav = data.navigation[section];
      if (!nav) {
        return {
          content: [{
            type: 'text',
            text: `Section "${section}" not found. Available: ${Object.keys(data.navigation).join(', ')}`
          }],
          isError: true
        };
      }
      return {
        content: [{ type: 'text', text: JSON.stringify(nav, null, 2) }]
      };
    }
  );

  // get_accessibility_info - Accessibility guidelines
  server.registerTool(
    'get_accessibility_info',
    {
      title: 'Get Accessibility Guidelines',
      description: 'Get accessibility guidelines, ARIA patterns, and WCAG references for a Garden component or pattern.',
      inputSchema: {
        name: z.string().describe('Component or pattern name (e.g., "button", "drag-and-drop", "color")')
      }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      const info = data.accessibility[key];
      if (!info) {
        // Search for partial matches
        const matches = Object.keys(data.accessibility)
          .filter(k => k.includes(key))
          .slice(0, 5);
        return {
          content: [{
            type: 'text',
            text: `No accessibility info found for "${name}".${matches.length > 0 ? ` Available: ${matches.join(', ')}` : ''}`
          }],
          isError: true
        };
      }
      return {
        content: [{
          type: 'text',
          text: `# Accessibility: ${info.component}\n\n${info.content}`
        }]
      };
    }
  );
}

function getSnippet(body: string, query: string, contextChars = 100): string {
  const idx = body.toLowerCase().indexOf(query);
  if (idx === -1) return '';
  const start = Math.max(0, idx - contextChars);
  const end = Math.min(body.length, idx + query.length + contextChars);
  return (start > 0 ? '...' : '') + body.slice(start, end).trim() + (end < body.length ? '...' : '');
}

async function main() {
  const data = loadGardenData();
  console.log(`Loaded: ${data.components.length} components, ${data.pages.length} pages, ${Object.keys(data.examples).length} example sets`);

  const app = express();
  app.use(express.json());

  const transports: Record<string, StreamableHTTPServerTransport> = {};

  app.post('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    if (sessionId && transports[sessionId]) {
      transport = transports[sessionId];
    } else if (!sessionId && isInitializeRequest(req.body)) {
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        onsessioninitialized: (sid) => {
          transports[sid] = transport;
        }
      });
      transport.onclose = () => {
        const sid = transport.sessionId;
        if (sid && transports[sid]) {
          delete transports[sid];
        }
      };
      const server = new McpServer(
        { name: 'garden-mcp-server', version: '0.1.0' },
        { capabilities: { logging: {} } }
      );
      registerTools(server, data);
      await server.connect(transport);
    } else {
      res.status(400).json({
        jsonrpc: '2.0',
        error: { code: -32000, message: 'Bad Request: No valid session ID' },
        id: null
      });
      return;
    }

    await transport.handleRequest(req, res, req.body);
  });

  app.get('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    if (!sessionId || !transports[sessionId]) {
      res.status(400).json({
        jsonrpc: '2.0',
        error: { code: -32000, message: 'Invalid or missing session ID' },
        id: null
      });
      return;
    }
    await transports[sessionId].handleRequest(req, res);
  });

  app.delete('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    if (sessionId && transports[sessionId]) {
      transports[sessionId].close();
      delete transports[sessionId];
      res.status(200).end();
    } else {
      res.status(400).json({
        jsonrpc: '2.0',
        error: { code: -32000, message: 'Invalid or missing session ID' },
        id: null
      });
    }
  });

  // Health check
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', components: data.components.length, pages: data.pages.length });
  });

  const PORT = parseInt(process.env.PORT || '8383', 10);
  app.listen(PORT, () => {
    console.log(`Garden MCP Server listening on http://localhost:${PORT}/mcp`);
  });
}

main().catch(err => {
  console.error('Server startup failed:', err);
  process.exit(1);
});
```

**Step 2: Run the server to verify**

Run: `cd mcp-server && npm run extract && npm run start`
Expected: Server starts, logs loaded data counts, listens on port 8383.

**Step 3: Test with curl**

```bash
# Health check
curl http://localhost:8383/health

# Initialize MCP session
curl -X POST http://localhost:8383/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"test","version":"0.1.0"}}}'
```

Expected: Health check returns JSON with component/page counts. Initialize returns session info.

**Step 4: Commit**

```bash
git add mcp-server/src/index.ts
git commit -m "feat(mcp): add MCP server with all tools"
```

---

## Task 6: Write tests

**Files:**
- Create: `mcp-server/src/__tests__/extract.test.ts`
- Create: `mcp-server/src/__tests__/tools.test.ts`
- Create: `mcp-server/vitest.config.ts`

**Step 1: Create vitest config**

```typescript
// mcp-server/vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    root: '.',
    include: ['src/__tests__/**/*.test.ts']
  }
});
```

**Step 2: Write extraction test**

```typescript
// mcp-server/src/__tests__/extract.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.resolve(import.meta.dirname, '../../data');

describe('data extraction', () => {
  it('produces valid pages.json', () => {
    const pages = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'pages.json'), 'utf-8'));
    expect(Array.isArray(pages)).toBe(true);
    expect(pages.length).toBeGreaterThan(0);
    expect(pages[0]).toHaveProperty('path');
    expect(pages[0]).toHaveProperty('title');
    expect(pages[0]).toHaveProperty('body');
  });

  it('produces valid navigation.json', () => {
    const nav = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'navigation.json'), 'utf-8'));
    expect(typeof nav).toBe('object');
    expect(nav).toHaveProperty('components');
    expect(Array.isArray(nav.components)).toBe(true);
  });

  it('produces valid examples.json', () => {
    const examples = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'examples.json'), 'utf-8'));
    expect(typeof examples).toBe('object');
    expect(examples).toHaveProperty('button');
    expect(Array.isArray(examples.button)).toBe(true);
    expect(examples.button[0]).toHaveProperty('name');
    expect(examples.button[0]).toHaveProperty('code');
  });

  it('produces valid accessibility.json', () => {
    const a11y = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'accessibility.json'), 'utf-8'));
    expect(typeof a11y).toBe('object');
  });
});
```

**Step 3: Write tool logic test**

```typescript
// mcp-server/src/__tests__/tools.test.ts
import { describe, it, expect } from 'vitest';
import { loadGardenData } from '../data/loader.js';

describe('data loader', () => {
  it('loads all data files', () => {
    const data = loadGardenData();
    expect(data.pages.length).toBeGreaterThan(0);
    expect(Object.keys(data.navigation).length).toBeGreaterThan(0);
    expect(Object.keys(data.examples).length).toBeGreaterThan(0);
  });

  it('pages have expected fields', () => {
    const data = loadGardenData();
    const buttonPage = data.pages.find(p => p.path === '/components/button');
    expect(buttonPage).toBeDefined();
    expect(buttonPage!.title).toBe('Button');
    expect(buttonPage!.package).toBe('@zendeskgarden/react-buttons');
  });

  it('examples include button examples', () => {
    const data = loadGardenData();
    expect(data.examples.button).toBeDefined();
    expect(data.examples.button.length).toBeGreaterThan(0);
    expect(data.examples.button.some(e => e.name === 'ButtonDefault')).toBe(true);
  });
});
```

**Step 4: Run tests**

Run: `cd mcp-server && npm test`
Expected: All tests pass (requires extraction to have been run first).

**Step 5: Commit**

```bash
git add mcp-server/vitest.config.ts mcp-server/src/__tests__/
git commit -m "test(mcp): add extraction and data loader tests"
```

---

## Task 7: Final integration and README

**Files:**
- Create: `mcp-server/README.md`

**Step 1: Write README**

```markdown
# Garden MCP Server

An MCP (Model Context Protocol) server that exposes the Garden design system documentation, component APIs, usage examples, and accessibility guidelines to AI coding assistants.

## Setup

```bash
cd mcp-server
npm install
```

## Extract data

Run the extraction script to build the JSON data files from the Garden Website source:

```bash
npm run extract
```

## Start the server

```bash
npm start
```

The server runs on `http://localhost:8383/mcp` by default. Set the `PORT` environment variable to change it.

## Available tools

| Tool | Description |
|------|-------------|
| `list_components` | List all Garden components |
| `search_components` | Search components by name or keyword |
| `get_component` | Get full component details (props, package, subcomponents) |
| `get_component_examples` | Get TSX usage examples for a component |
| `search_docs` | Full-text search across documentation |
| `get_doc_page` | Get a specific documentation page |
| `get_navigation` | Get navigation tree for a section |
| `get_accessibility_info` | Get accessibility guidelines for a component |

## Configure with Claude Code

Add to your `.claude/settings.json`:

```json
{
  "mcpServers": {
    "garden": {
      "type": "url",
      "url": "http://localhost:8383/mcp"
    }
  }
}
```
```

**Step 2: Commit**

```bash
git add mcp-server/README.md
git commit -m "docs(mcp): add README for Garden MCP server"
```
