# Kazira.io

**Intelligence. Infrastructure. Innovation.**

Kazira is an African AI infrastructure and venture ecosystem building intelligent systems, domain-specific applications and automation technologies for businesses and industries. The initial commercial focus is healthcare in Kenya, with a deliberate path into professional services, SMEs and enterprise environments.

## Strategic architecture

Kazira operates through three connected divisions:

### 1. Kazira Systems & Intelligence

**Core platform: KarizaX**

KarizaX is the planned core AI workflow automation and intelligence system. It brings together workflow orchestration, AI model integrations, agent coordination, systems integration, business intelligence and domain-specific intelligence.

Core capability areas:
- AI infrastructure and model integration
- Intelligent workflow automation and orchestration
- Business intelligence and performance analytics
- Domain-specific intelligence, beginning with healthcare
- Data engineering, AI evaluation and research

**Commercial entry point: Healthcare Intelligence**

The initial offer combines healthcare business intelligence and administrative workflow automation for clinics and healthcare organisations. Early delivery should focus on operational use cases such as appointment coordination, reporting, revenue visibility and stock monitoring. Clinical decision-support capabilities require separate clinical validation and governance.

KarizaX is the strategic platform direction; describe platform capabilities according to their actual implementation and maturity. Do not imply that planned capabilities are already generally available.

### 2. Kazira Advisory

**Consultancy solution: NanoStrategyKE**

NanoStrategyKE is part of Kazira Advisory. It helps organisations understand performance, identify operational constraints, assess AI readiness and plan or implement digital transformation.

Core services:
- Business performance diagnostics and intelligence
- AI and digital transformation strategy
- Process assessment and optimisation
- Data analytics and management reporting
- Technology implementation advisory

The consulting-to-product model is: diagnose customer problems, recommend improvements, implement appropriate solutions, and productise repeatable workflows where demand is validated.

### 3. Kazira Ventures & Learn

This division develops specialised products, marketplaces, venture opportunities and education programmes.

#### Product portfolio
- **JinoX AI:** Healthcare AI product initiative.
- **Dentside Remote:** Remote dental care and consultation product.
- **DentMatch KE:** Dental talent marketplace.
- **KaziX:** Blue-collar skilled labour marketplace connecting customers and organisations with skilled workers.

Each product has a distinct customer proposition and roadmap. Products may reuse shared Kazira infrastructure where appropriate, but they are not interchangeable with KarizaX.

#### Kazira Learn
Practical AI, automation, data and digital productivity education for professionals, businesses and institutions. Begin with workshops and training programmes; expand delivery formats as demand is validated.

## Wider ecosystem and independent initiatives

- **Job Disruption Scanner:** Research tool exploring how AI and automation may affect roles, tasks and skills.
- **K-AARB:** Kenya AI Alignment & Reasoning Benchmark, an independent research and evaluation project: https://kaarb.vercel.app/. It is not a Kazira service line.

Describe every initiative according to its actual maturity, availability and ownership. Do not present prototypes or research projects as fully established commercial services.



## Technology principles

The corporate website currently uses:
- React 19
- TypeScript
- Vite
- React Router with hash-based routing
- Tailwind CSS 4
- Framer Motion
- Lucide React

The website is a public corporate site; it does not itself provide KarizaX workflow execution or run model inference in the browser. Future AI integrations that require credentials or sensitive data must be implemented behind a server-side API boundary. Never place API keys or secrets in frontend code or `VITE_*` environment variables.

For product engineering, prefer modular architecture, tenant isolation, least-privilege access, auditability, model portability and human approval for sensitive actions. Healthcare information must be handled under applicable privacy, security and professional requirements.

## Local development

Use Node.js 22 or later.

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

## Release review

The Privacy Policy and Terms of Service contain legacy descriptions of accounts, AI tools, monitoring and data processing. Review them against the actual live services and real data practices before treating them as final legal statements.


## Repository security and contribution safeguards

- Do not commit exported prompt histories, chat transcripts, customer records, patient information, production logs or other operational data.
- Keep credentials in approved secret stores or local environment files; never expose secrets through frontend source code or `VITE_*` variables.
- Use the committed `package-lock.json` and `npm ci` for reproducible CI installs.
- Submit dependency updates through pull requests and review the resulting changes before merging.
- Treat the public corporate website as a presentation layer. Any future authenticated workflows, customer data processing or AI execution must use a separately reviewed server-side boundary.
- Before release, verify the actual production response headers, run the repository quality workflow, and review changes to privacy notices against the real data-flow and processor inventory.
