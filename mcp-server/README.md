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

Add to your project's `.mcp.json`:

```json
{
  "mcpServers": {
    "garden": {
      "type": "http",
      "url": "http://localhost:8383/mcp"
    }
  }
}
```

## Development

```bash
npm run dev      # Start with file watching
npm test         # Run tests
npm run test:watch  # Run tests in watch mode
```
