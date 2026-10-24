# Kazira.io - AI-Powered Automation & Research Benchmark

Kazira.io is a modern platform providing AI-powered clinical intelligence (Kazira Automate), the Kenya AI Alignment & Reasoning Benchmark (K-AARB), and future-skills learning resources. Built with modern frontend technologies, it serves as an authoritative hub for frontier AI capability analysis and enterprise intelligence.

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Modules & Platforms](#key-modules--platforms)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)

---

## About The Project

Kazira.io bridges research, healthcare technology, and artificial intelligence capabilities:

-   **Kazira Automate (Flagship Product):** Featuring *Kazira Clinical Intelligence*, an advanced platform for clinical data analysis designed to streamline healthcare decision-making through synthesized insights.
-   **Kenya AI Alignment & Reasoning Benchmark (K-AARB):** Complete longitudinal benchmarking and transcripts evaluating the world's frontier AI models against contextual, sovereign, and thermodynamic realities in Kenya across Q1, Q2, and Q3 cohorts.
-   **Kazira Learn:** Future-skills educational journeys powered by Google Opal.
-   **NanostrategyKE & Consultation:** Enterprise advisory, AI readiness assessments, and workflow automation.

---

## Key Modules & Platforms

-   **Clinical Intelligence MVP:** Dedicated portal for healthcare data synthesis ([Kazira Clinical Intelligence](https://kazira-io-clinical-intelligence-mvp.vercel.app/)).
-   **K-AARB Benchmark Hub & Leaderboard:** Official results and full examination transcripts for Claude, GPT-5, Qwen, Gemini, Perplexity, Copilot, Mistral, Meta AI, Grok, and DeepSeek.
-   **Jotform Community & Consultation Hub:** Seamless, secure form integration for updates and enterprise consultations without requiring intrusive device permissions.

---

## Tech Stack

This project is built using a secure, zero-attack-surface modern frontend stack:

-   **Core Framework:** [React 19](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Routing:** [React Router DOM](https://reactrouter.com/)
-   **UI/Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)

---

## Getting Started

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/eltonarunga/Kazira.io.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## Project Structure

```text
/
├── components/           # Reusable React components
│   ├── common/           # Generic UI components (Button, Card, Modal, ErrorBoundary, Logo, ScrollToTop)
│   └── layout/           # Page structure (Header, Footer)
├── pages/                # Top-level page components (LandingPage, Automate, Legal, Benchmark Transcripts)
├── data/                 # Benchmark questions and datasets
├── App.tsx               # Main application component with routing
├── constants.ts          # Platform links and navigation constants
├── index.css             # Global Tailwind CSS entry
├── index.html            # HTML entry point
├── index.tsx             # React root mount
└── vite.config.ts        # Vite configuration
```