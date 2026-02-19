# Garden MCP Server Design

## Overview

An MCP (Model Context Protocol) server for the Garden Website that exposes Garden design system data — component APIs, usage examples, documentation, and accessibility guidelines — to AI coding assistants via HTTP/SSE transport.

## Goals

- Help engineers using AI assistants (Claude Code, Cursor, etc.) build with Garden components accurately
- Provide programmatic access to component props, examples, design guidelines, and accessibility info
- Serve as a general documentation lookup tool for the Garden design system

## Architecture

### Two-part system

1. **Data extraction script** — Runs after `gatsby build`. Queries Gatsby's GraphQL layer to extract structured data into static JSON files.
2. **MCP HTTP/SSE server** — Lightweight TypeScript server using `@modelcontextprotocol/sdk`. Loads JSON at startup, exposes MCP tools.

### Data flow

```
gatsby build → extract-data script → JSON files → MCP server reads JSON → exposes tools via HTTP/SSE
```

### Directory structure

```
mcp-server/
├── src/
│   ├── index.ts              # Server entry point, HTTP/SSE transport
│   ├── tools/                # MCP tool definitions
│   │   ├── search-components.ts
│   │   ├── get-component.ts
│   │   ├── get-examples.ts
│   │   ├── search-docs.ts
│   │   └── get-accessibility.ts
│   └── data/
│       └── loader.ts         # JSON data loading utilities
├── data/                     # Extracted JSON (gitignored)
│   ├── components.json
│   ├── navigation.json
│   ├── examples.json
│   ├── pages.json
│   └── accessibility.json
├── extract.ts                # Data extraction script
├── package.json
└── tsconfig.json
```

## MCP Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `search_components` | Search Garden components by name or keyword | `query: string` |
| `get_component` | Get full component details: props, description, package, subcomponents | `name: string` |
| `get_component_examples` | Get usage examples (TSX code) for a component | `name: string` |
| `list_components` | List all available Garden components | none |
| `search_docs` | Full-text search across all documentation pages | `query: string` |
| `get_doc_page` | Get content of a specific documentation page | `path: string` |
| `get_navigation` | Get the navigation tree for a section | `section: string` (components, design, patterns, content) |
| `get_accessibility_info` | Get accessibility guidelines, ARIA patterns, and WCAG references | `name: string` |

### Example tool response

`get_component("Button")` returns:

```json
{
  "name": "Button",
  "description": "Buttons let users take action quickly...",
  "package": "@zendeskgarden/react-buttons",
  "version": "9.12.6",
  "props": {
    "size": { "type": "\"small\" | \"medium\" | \"large\"", "default": "\"medium\"" },
    "isPrimary": { "type": "boolean", "default": "false" }
  },
  "subcomponents": ["EndIcon", "StartIcon"],
  "examples": ["ButtonDefault", "ButtonDanger", "ButtonSizes"]
}
```

## Data Extraction

The extraction script parses:

1. **MDX frontmatter** — Component titles, descriptions, package names, component/subcomponent file paths
2. **MDX body content** — Full page content as markdown, accessibility sections extracted separately
3. **YAML navigation files** — `content/nav/*.yml` for hierarchical nav trees
4. **Example TSX files** — `src/examples/` indexed by component name
5. **Docgen output** — Component prop metadata from `react-components/` via `@zendeskgarden/scripts`

### Output JSON schemas

**components.json** — Array of component objects with name, description, package, version, props, subcomponents, path

**navigation.json** — Object keyed by section (components, design, patterns, content), each containing a tree of nav items with title, url, and children

**examples.json** — Object keyed by component name, each containing an array of {name, code} objects

**pages.json** — Array of page objects with path, title, description, body (markdown content)

**accessibility.json** — Object keyed by component/pattern name, each containing extracted accessibility guidelines, ARIA attributes, WCAG references, and keyboard interaction notes

## Technology

- **Runtime:** Node.js / TypeScript
- **MCP SDK:** `@modelcontextprotocol/sdk`
- **Transport:** HTTP with Server-Sent Events (SSE)
- **Port:** Configurable, default 8383

## Error handling

- Unknown component/page names return clear error messages with suggestions
- Extraction script validates output completeness and reports missing data
- Server returns structured MCP errors for invalid tool parameters

## Testing

- Integration test: start server, call each tool, verify response shape and content
- Extraction test: verify JSON output matches expected schema
- Smoke test: ensure server starts and responds to health check
