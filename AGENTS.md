# Garden Website

Documentation site for the [Zendesk Garden](https://garden.zendesk.com) design system, built with Gatsby, React, TypeScript, and MDX. Content is sourced from MDX pages, the `react-components` git submodule, and the Figma API.

## Setup & Commands

```bash
# Install dependencies (also triggers build via prepare script)
npm install

# Local dev server with live reload
npm start

# Production build
npm run build

# Run all checks (prettier + lint + tsc) — matches CI
npm test

# Lint JS/TS (ESLint)
npm run lint:js

# Lint CSS-in-JS (StyleLint)
npm run lint:css

# Lint Markdown/MDX (markdownlint)
npm run lint:md

# Run all linters
npm run lint

# Type check
npm exec tsc

# Format files with Prettier
npm run format

# Upgrade Garden component packages and sync submodule
npm run upgrade
```

**Required env var:** `FIGMA_TOKEN` — needed for build; see `.github/CONTRIBUTING.md` for how to generate one.

## Code Conventions

- All source files start with the Apache 2.0 copyright header (see any existing `.ts`/`.tsx` file)
- TypeScript strict mode — `tsconfig.json` has `"strict": true`
- Path aliases: `components/*` → `src/components/*`, `layouts/*` → `src/layouts/*` (configured in `tsconfig.json` and `gatsby-config.ts`)
- styled-components for all CSS-in-JS; StyleLint enforces `@zendeskgarden/stylelint-config`
- Prettier: `printWidth: 100`, `singleQuote: true`, `trailingComma: 'none'`, `arrowParens: 'avoid'`
- MDX files for documentation pages; markdownlint enforces `.markdownlintrc`

## Do

- Add the Apache 2.0 copyright block at the top of every new `.ts`/`.tsx` file
- Import shared components using the `components/` path alias (e.g. `import { Layout } from 'components'`)
- Use `import … from '!!raw-loader!../../examples/…'` to pull raw code strings for code blocks in MDX
- Keep example components in `src/examples/<package-name>/` — one component per file

## Don't

- Don't edit files inside `react-components/` — it's a read-only git submodule
- Don't skip `npm run lint` before pushing; it runs as a pre-commit hook
- Don't hardcode navigation — update the YAML files in `content/nav/` instead
- Don't commit `.env` files or the `FIGMA_TOKEN` value

## Architecture

See `ARCHITECTURE.md` for system architecture, component map, and data flow.

## Security

See `SECURITY.md` for mandatory security requirements and prohibited patterns.

## Safety & Permissions

Allowed without approval:
- Read/list files
- Run `npm run lint`, `npm run lint:js`, `npm run lint:css`, `npm run lint:md`, `npm exec tsc`

Ask before:
- Installing or removing packages
- Deleting files or directories
- Running `npm run build` or `npm test` (slow)
- Modifying CI/CD or Netlify configuration
- Pushing to remote branches

## PR & Commit Guidelines

- Branch format: `username/verb-noun` (e.g. `jzempel/update-components`)
- PR title follows [Conventional Commits](https://conventionalcommits.org/): `type: description` or `type(scope): description`
- Common types: `feat`, `fix`, `chore`, `ci`, `docs`
- Maintainers squash-merge using the PR title as the commit message — write titles accordingly
- Consult `.github/PULL_REQUEST_TEMPLATE.md` when opening a PR

## References

- Contributing workflow: `.github/CONTRIBUTING.md`
- PR template: `.github/PULL_REQUEST_TEMPLATE.md`
- Architecture: `ARCHITECTURE.md`
- Security: `SECURITY.md`
