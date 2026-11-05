# Kazira.io

Kazira is an emerging-market business intelligence and workflow automation company, starting in Kenya. The corporate website presents Kazira's services, advisory work and connected products. Product applications are deployed independently and linked from this site.

## Strategic focus

Kazira helps clinics, healthcare organizations, consultancies and growing businesses improve operational visibility and performance through:

- Business intelligence and performance analysis
- Operational workflow assessment and automation strategy
- AI readiness and implementation advisory
- NanoStrategyKE consulting as part of Kazira's advisory offering

The long-term product direction is the KaziX automation system: a governed workflow layer that can monitor operations, surface exceptions, recommend actions and, where authorized, execute defined tasks.

## Independent products and resources

- **K-AARB:** the Kenya AI Alignment & Reasoning Benchmark is a separate product and codebase: https://kaarb.vercel.app/
- **Kazira Learn:** learning resources are hosted externally.
- **Job Disruption Scanner:** an external research tool.
- **Clinical Intelligence prototype:** a separately deployed prototype linked from the Business Intelligence & Performance page.

The Kazira corporate website does not host K-AARB exam logic, model transcripts or benchmark datasets. It does not run model inference in the browser.

## Technology

- React 19
- TypeScript
- Vite
- React Router with hash-based routing
- Tailwind CSS 4
- Framer Motion
- Lucide React

The corporate site intentionally does not include a browser-side generative-AI SDK. Any future AI integrations that require credentials or sensitive data must be implemented behind a server-side API boundary. Do not place API keys or secrets in frontend code or `VITE_*` environment variables.

## Local development

Use Node.js 22 or later (the repository pins the major version in `.nvmrc`, CI runs on Node 22, and the Vercel project runtime is aligned to Node 22).

```bash
npm ci
npm run dev
```

Production validation:

```bash
npm run typecheck
npm run build
npm audit --audit-level=high
```

## Project structure

```text
components/
  common/       Reusable UI primitives and modal/error handling
  layout/       Corporate header and footer
pages/          Landing, service and legal pages
App.tsx         Route composition and lazy loading
constants.ts    Navigation and external product URLs
index.css       Global design tokens and styles
index.tsx       React application entry point
vite.config.ts  Vite development/build configuration
```

## Engineering safeguards

- Use `npm ci` for reproducible dependency installation.
- Keep secrets out of source control and client-side bundles.
- Keep external product applications isolated from the corporate shell.
- Use lazy-loaded route components to reduce initial JavaScript.
- Run type-check, production build and dependency audit in CI.
- Review legal pages whenever data collection, products or integrations change.

## Release review items

The Privacy Policy and Terms of Service contain legacy descriptions of accounts, AI tools and data processing. Review them against the actual live services and the organization's real data practices before treating them as final legal statements.
