# AI Agent Security Standard

This document defines mandatory security requirements for all AI coding assistants operating in this repository.

**Authority:** Derived from [Zendesk Minimum Baseline Security Standard](https://docs.google.com/document/d/17GZ9TpjKCt6WCdw3yxL44Ra_YscbOBVnVkUVGgx5Hz0/) and internal security policies.

---

## Core Security Mandate

Security is a first-class requirement. If a request would produce insecure code:
1. **Stop** and flag the concern
2. **Explain** why it's problematic
3. **Propose** a secure alternative

---

## Absolute Prohibitions

AI agents must **NEVER**:

- Hardcode secrets, API keys, tokens, or credentials in source code
- Commit `.env` files or any file containing real secret values
- Log or expose `FIGMA_TOKEN`, `NETLIFY_TOKEN`, `NETLIFY_SITE_ID`, or any other secret
- Disable or bypass security controls
- Transmit sensitive data over unencrypted channels
- Log PII or customer data

---

## Required Security Patterns

### Secrets — always use environment variables

```ts
// Correct
const figmaToken = process.env.FIGMA_TOKEN;

// NEVER
const figmaToken = 'figd_abc123XYZ';
```

### Input Validation — validate external data before use

The site's build-time plugins fetch data from the Figma API and the `react-components` submodule. Validate and sanitize any externally sourced data before injecting it into GraphQL nodes or page output.

---

## Site-Specific Requirements

- **`FIGMA_TOKEN`** must only be accessed via `process.env.FIGMA_TOKEN` — never embed in source or config files
- **`NETLIFY_TOKEN` / `NETLIFY_SITE_ID`** are deployment secrets — access only via CI environment variables
- SVG files sourced from `@zendeskgarden/svg-icons` or Figma must not be modified to inject scripts
- Dependencies are managed by Dependabot and Renovate — do not manually downgrade packages to bypass security patches
- The `react-components` submodule is read-only; do not modify it

---

## When to Stop and Escalate

Stop and involve a human if a task requires:

- Exposing or logging any secret or token
- Bypassing authentication or authorization
- Disabling certificate validation or TLS
- Using deprecated cryptographic algorithms
- Modifying Netlify or CI/CD configuration in ways that bypass security controls

---

## References

- [Minimum Baseline Security Standard](https://docs.google.com/document/d/17GZ9TpjKCt6WCdw3yxL44Ra_YscbOBVnVkUVGgx5Hz0/)
- [Cryptography Standards](https://techmenu.zende.sk/standards/cryptography-standards/)

---

**Questions?** Reach out to the Security team or file a ticket via the Security Engagement process.
