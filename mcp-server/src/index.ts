/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { randomUUID } from 'node:crypto';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import express from 'express';
import { z } from 'zod';
import { loadGardenData } from './data/loader.js';
import type { GardenData } from './data/loader.js';

/* ---------------------------------------------------------------------------
 * Snippet helper
 * --------------------------------------------------------------------------- */

/**
 * Returns a text snippet around the first occurrence of `query` in `body`,
 * with configurable context characters on each side.
 */
function getSnippet(body: string, query: string, contextChars = 100): string {
  const lower = body.toLowerCase();
  const idx = lower.indexOf(query.toLowerCase());

  if (idx === -1) {
    return body.slice(0, contextChars * 2);
  }

  const start = Math.max(0, idx - contextChars);
  const end = Math.min(body.length, idx + query.length + contextChars);
  let snippet = body.slice(start, end);

  if (start > 0) {
    snippet = `...${snippet}`;
  }

  if (end < body.length) {
    snippet = `${snippet}...`;
  }

  return snippet;
}

/* ---------------------------------------------------------------------------
 * Tool registration
 * --------------------------------------------------------------------------- */

function registerTools(server: McpServer, data: GardenData): void {
  /* 1. list_components ---------------------------------------------------- */
  server.registerTool(
    'list_components',
    {
      title: 'List Components',
      description:
        'List all Zendesk Garden components with name, package, and description.'
    },
    async () => {
      const components = data.components.map(c => ({
        name: c.name,
        package: c.package,
        description: c.description
      }));

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(components, null, 2)
          }
        ]
      };
    }
  );

  /* 2. search_components -------------------------------------------------- */
  server.registerTool(
    'search_components',
    {
      title: 'Search Components',
      description:
        'Search for Garden components by name, description, or package. Case-insensitive.',
      inputSchema: {
        query: z.string().describe('Search query to match against component name, description, or package')
      }
    },
    async ({ query }) => {
      const q = query.toLowerCase();
      const matches = data.components.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.package.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        return {
          content: [
            {
              type: 'text' as const,
              text: `No components found matching "${query}".`
            }
          ]
        };
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(
              matches.map(c => ({
                name: c.name,
                package: c.package,
                description: c.description
              })),
              null,
              2
            )
          }
        ]
      };
    }
  );

  /* 3. get_component ------------------------------------------------------ */
  server.registerTool(
    'get_component',
    {
      title: 'Get Component',
      description:
        'Get full details for a specific Garden component by exact name (case-insensitive).',
      inputSchema: {
        name: z.string().describe('Component name (case-insensitive exact match)')
      }
    },
    async ({ name }) => {
      const match = data.components.find(
        c => c.name.toLowerCase() === name.toLowerCase()
      );

      if (!match) {
        const similar = data.components
          .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
          .map(c => c.name)
          .slice(0, 5);

        return {
          content: [
            {
              type: 'text' as const,
              text: `Component "${name}" not found.${
                similar.length > 0
                  ? ` Did you mean: ${similar.join(', ')}?`
                  : ''
              }`
            }
          ],
          isError: true
        };
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(match, null, 2)
          }
        ]
      };
    }
  );

  /* 4. get_component_examples --------------------------------------------- */
  server.registerTool(
    'get_component_examples',
    {
      title: 'Get Component Examples',
      description:
        'Get example code for a Garden component. Looks up by directory name (lowercase, e.g. "button").',
      inputSchema: {
        name: z.string().describe('Component directory name (lowercase, e.g. "button", "combobox")')
      }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      const examples = data.examples[key];

      if (!examples || examples.length === 0) {
        const available = Object.keys(data.examples);

        return {
          content: [
            {
              type: 'text' as const,
              text: `No examples found for "${name}". Available example sets: ${available.join(', ')}`
            }
          ],
          isError: true
        };
      }

      const formatted = examples
        .map(
          ex =>
            `### ${ex.name}\n\n\`\`\`tsx\n${ex.code}\n\`\`\``
        )
        .join('\n\n');

      return {
        content: [
          {
            type: 'text' as const,
            text: formatted
          }
        ]
      };
    }
  );

  /* 5. search_docs -------------------------------------------------------- */
  server.registerTool(
    'search_docs',
    {
      title: 'Search Docs',
      description:
        'Search across all Garden documentation pages by title, description, and body content. Returns top 10 matches.',
      inputSchema: {
        query: z.string().describe('Search query for documentation pages')
      }
    },
    async ({ query }) => {
      const q = query.toLowerCase();
      const matches = data.pages
        .filter(
          p =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.body.toLowerCase().includes(q)
        )
        .slice(0, 10)
        .map(p => ({
          path: p.url,
          title: p.title,
          description: p.description,
          snippet: getSnippet(p.body, query)
        }));

      if (matches.length === 0) {
        return {
          content: [
            {
              type: 'text' as const,
              text: `No documentation pages found matching "${query}".`
            }
          ]
        };
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(matches, null, 2)
          }
        ]
      };
    }
  );

  /* 6. get_doc_page ------------------------------------------------------- */
  server.registerTool(
    'get_doc_page',
    {
      title: 'Get Doc Page',
      description:
        'Get the full content of a specific documentation page by its URL path (e.g. "/components/button").',
      inputSchema: {
        path: z.string().describe('Page URL path, e.g. "/components/button"')
      }
    },
    async ({ path }) => {
      const normalized = path.startsWith('/') ? path : `/${path}`;
      const page = data.pages.find(p => p.url === normalized);

      if (!page) {
        return {
          content: [
            {
              type: 'text' as const,
              text: `Page "${normalized}" not found. Use search_docs to find the correct path.`
            }
          ],
          isError: true
        };
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: `# ${page.title}\n\n${page.description}\n\n---\n\n**Package:** ${page.package || 'N/A'}\n\n${page.body}`
          }
        ]
      };
    }
  );

  /* 7. get_navigation ----------------------------------------------------- */
  server.registerTool(
    'get_navigation',
    {
      title: 'Get Navigation',
      description:
        'Get the navigation tree for a specific site section (e.g. "components", "design", "content", "patterns").',
      inputSchema: {
        section: z.string().describe('Section name (e.g. "components", "design", "content", "patterns")')
      }
    },
    async ({ section }) => {
      const key = section.toLowerCase();
      const nav = data.navigation[key];

      if (!nav) {
        const available = Object.keys(data.navigation);

        return {
          content: [
            {
              type: 'text' as const,
              text: `Section "${section}" not found. Available sections: ${available.join(', ')}`
            }
          ],
          isError: true
        };
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(nav, null, 2)
          }
        ]
      };
    }
  );

  /* 8. get_accessibility_info --------------------------------------------- */
  server.registerTool(
    'get_accessibility_info',
    {
      title: 'Get Accessibility Info',
      description:
        'Get accessibility information for a specific component or page (e.g. "color", "buttons", "drag-and-drop").',
      inputSchema: {
        name: z.string().describe('Component or page name (lowercase, e.g. "color", "buttons")')
      }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      const entry = data.accessibility[key];

      if (!entry) {
        const allKeys = Object.keys(data.accessibility);
        const partial = allKeys.filter(k => k.includes(key));

        return {
          content: [
            {
              type: 'text' as const,
              text: `No accessibility info found for "${name}".${
                partial.length > 0
                  ? ` Partial matches: ${partial.join(', ')}`
                  : ` Available keys: ${allKeys.join(', ')}`
              }`
            }
          ],
          isError: true
        };
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: `# Accessibility: ${entry.page}\n\n${entry.content}`
          }
        ]
      };
    }
  );
}

/* ---------------------------------------------------------------------------
 * Main
 * --------------------------------------------------------------------------- */

async function main(): Promise<void> {
  /* Load data ------------------------------------------------------------- */
  const data = loadGardenData();

  console.log('Garden MCP Server - Data loaded:');
  console.log(`  Pages:         ${data.pages.length}`);
  console.log(`  Components:    ${data.components.length}`);
  console.log(`  Example sets:  ${Object.keys(data.examples).length}`);
  console.log(`  Nav sections:  ${Object.keys(data.navigation).length}`);
  console.log(`  Accessibility: ${Object.keys(data.accessibility).length}`);

  /* Express app ----------------------------------------------------------- */
  const app = express();

  app.use(express.json());

  /* Session management ---------------------------------------------------- */
  const transports = new Map<string, StreamableHTTPServerTransport>();

  /* POST /mcp — handle MCP requests -------------------------------------- */
  app.post('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport;

    if (sessionId && transports.has(sessionId)) {
      transport = transports.get(sessionId)!;
    } else if (!sessionId && isInitializeRequest(req.body)) {
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        onsessioninitialized: (sid) => {
          transports.set(sid, transport);
        }
      });

      transport.onclose = () => {
        if (transport.sessionId) {
          transports.delete(transport.sessionId);
        }
      };

      const server = new McpServer({
        name: 'garden-mcp-server',
        version: '0.1.0'
      });

      registerTools(server, data);

      await server.connect(transport);
    } else {
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided.'
        },
        id: null
      });

      return;
    }

    await transport.handleRequest(req, res, req.body);
  });

  /* GET /mcp — handle SSE streams ---------------------------------------- */
  app.get('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;

    if (!sessionId || !transports.has(sessionId)) {
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided.'
        },
        id: null
      });

      return;
    }

    const transport = transports.get(sessionId)!;

    await transport.handleRequest(req, res);
  });

  /* DELETE /mcp — close sessions ------------------------------------------ */
  app.delete('/mcp', async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;

    if (!sessionId || !transports.has(sessionId)) {
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: No valid session ID provided.'
        },
        id: null
      });

      return;
    }

    const transport = transports.get(sessionId)!;

    await transport.handleRequest(req, res);
  });

  /* GET /health ----------------------------------------------------------- */
  app.get('/health', (_req, res) => {
    res.json({
      status: 'ok',
      data: {
        pages: data.pages.length,
        components: data.components.length,
        examples: Object.keys(data.examples).length,
        navigation: Object.keys(data.navigation).length,
        accessibility: Object.keys(data.accessibility).length
      }
    });
  });

  /* Start server ---------------------------------------------------------- */
  const port = Number(process.env.PORT) || 8383;

  app.listen(port, () => {
    console.log(`Garden MCP Server listening on http://localhost:${port}`);
    console.log(`  Health check: http://localhost:${port}/health`);
    console.log(`  MCP endpoint: http://localhost:${port}/mcp`);
  });
}

main().catch(err => {
  console.error('Failed to start Garden MCP Server:', err);
  process.exit(1);
});
