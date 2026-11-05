# Kazira.io

Kazira is an AI workflow automation and business solutions company serving SMEs and healthcare organisations, starting in Kenya. We help teams improve the way work gets done through process redesign, connected systems, business intelligence and responsible AI-enabled automation.

## Positioning

**Core promise:** Better systems. Smarter work.

Kazira helps organisations reduce repetitive manual work, connect fragmented tools, improve operational visibility and make better decisions. We begin with the workflow and the business problem, then recommend an appropriate solution rather than introducing AI for its own sake.

## Three connected arms

### 1. Kazira Solutions
The core delivery business: AI-enabled workflow automation, systems integration, business intelligence, operational reporting, data and process improvement, and governed AI assistants or agents.

Priority markets:
- SMEs and growing businesses: lead handling, customer communication, quotations, invoicing administration, task routing, inventory visibility, internal knowledge and management reporting.
- Clinics and healthcare organisations: appointment and recall coordination, patient communication, administrative documentation, stock monitoring, service reporting and operational coordination. Clinical judgement remains with qualified healthcare professionals.

### 2. Kazira Advisory
The consultancy arm, including NanoStrategyKE. Services include business and operational strategy, business intelligence and performance analysis, AI readiness and opportunity assessments, digital transformation planning, workflow audits, automation roadmaps and implementation support.

### 3. Kazira Academy
The learning and skills arm. It develops practical AI literacy and digital capabilities through learning resources, workshops and role-relevant pathways in AI use, workflow design, data interpretation, no-code automation and responsible adoption.

## Wider solution ecosystem

These initiatives extend the Kazira ecosystem but are not all the same kind of offering or at the same stage of maturity:

- **KaziX:** the longer-term workflow automation platform. Its intended direction is to monitor approved processes, detect exceptions, recommend actions and execute defined tasks where explicitly authorised.
- **DentSide Remote:** a healthcare-focused remote support initiative.
- **JinoX AI:** an AI-focused product in the wider ecosystem.
- **Job Disruption Scanner:** a research tool exploring how AI and automation may affect roles, tasks and skills.
- **K-AARB:** the Kenya AI Alignment & Reasoning Benchmark, an independent research and evaluation project with its own repository and deployment: https://kaarb.vercel.app/. It is not a Kazira service line.

The corporate website links to independently deployed tools and products. Their capabilities, availability and maturity should be described accurately and reviewed individually.

## Delivery approach

1. Discover the current workflow, systems, users, constraints and desired outcome.
2. Identify bottlenecks, repetitive tasks, data gaps and risks.
3. Design a fit-for-purpose workflow, integration or intelligence solution.
4. Implement and test with users, permissions and human review appropriate to the task.
5. Measure adoption and operational outcomes, then improve.

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
