# Kazira.io

Kazira is an AI workflow automation and business solutions company serving SMEs and healthcare organisations, starting in Kenya.

**Positioning:** Better Systems. Smarter Work.

Kazira helps organisations improve how work gets done through practical AI workflow automation, business intelligence, strategic consultancy and workforce capability development.

## Business structure

Kazira operates through three connected arms. Each arm has two high-value deliverables, keeping the offer focused and commercially clear.

### 1. Kazira Solutions — automate and improve operations

**Deliverable 1: AI workflow automation and systems integration**

We assess, redesign and automate repeatable business processes, connecting the tools organisations already use. Typical workflows include enquiry handling, customer follow-up, approvals, reminders, document movement and administrative coordination. Integrations, access controls and human review are designed into delivery where appropriate.

**Deliverable 2: Business intelligence and performance dashboards**

We organise operational data into useful dashboards, management reports and performance indicators. The goal is to give leaders visibility into business activity, service delivery, sales, workload and bottlenecks so they can make better-informed decisions.

Primary customers: SMEs, clinics and healthcare organisations.

Healthcare examples focus on administration and operations, including appointment and recall coordination, patient communication workflows, service reporting and stock visibility. Clinical judgement remains with qualified healthcare professionals.

### 2. Kazira Advisory — diagnose and plan transformation

NanoStrategyKE is part of this consultancy arm.

**Deliverable 1: Business performance diagnostics and intelligence**

Review operating performance, interpret available business data, identify bottlenecks and surface practical opportunities to improve efficiency, service delivery and decision-making.

**Deliverable 2: AI and digital transformation strategy**

Assess organisational readiness, identify and prioritise appropriate AI and digital opportunities, and develop actionable transformation roadmaps that account for business objectives, governance, resources and implementation.

### 3. Kazira Academy — develop practical capabilities

**Deliverable 1: Applied AI and automation training**

Practical learning in AI literacy, effective use of AI tools, prompt and workflow design, no-code automation and responsible AI adoption for real workplace tasks.

**Deliverable 2: Data and digital productivity skills training**

Practical development of spreadsheet capability, data interpretation, reporting, digital collaboration and productivity skills for individuals and organisational teams.

## Wider ecosystem

Kazira has a wider portfolio of specialised initiatives. These are distinct from the six core commercial deliverables above and should not distract from the primary business positioning.

- **KaziX:** a marketplace for blue-collar skills, connecting customers and organisations with skilled workers.
- **DentSide Remote:** a healthcare-focused remote support initiative.
- **JinoX AI:** an AI-focused digital product in the wider ecosystem.
- **Job Disruption Scanner:** a research tool exploring how AI and automation may affect roles, tasks and skills.
- **K-AARB:** the Kenya AI Alignment & Reasoning Benchmark, an independent research and evaluation project: https://kaarb.vercel.app/. It is not a Kazira service line.

Describe each initiative according to its actual maturity and availability. Do not imply that a prototype or research initiative is a fully established commercial service.

## Delivery approach

1. Understand the organisation, current process, data and intended outcome.
2. Diagnose the operational issue and define a measurable scope.
3. Design the workflow, analysis or roadmap with appropriate safeguards.
4. Implement or deliver with stakeholder involvement.
5. Review adoption, performance and opportunities for improvement.

## Technology

- React 19
- TypeScript
- Vite
- React Router with hash-based routing
- Tailwind CSS 4
- Framer Motion
- Lucide React

The corporate site does not run model inference in the browser. Future AI integrations that require credentials or sensitive data must be implemented behind a server-side API boundary. Never place API keys or secrets in frontend code or `VITE_*` environment variables.

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

## Release review items

The Privacy Policy and Terms of Service contain legacy descriptions of accounts, AI tools and data processing. Review them against the actual live services and the organisation's real data practices before treating them as final legal statements.
