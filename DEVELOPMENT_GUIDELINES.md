# Kazira.io Development Guidelines

This document outlines the core directives and conventions for developing the Kazira.io application. Its purpose is to ensure code is clean, maintainable, and professional.

---

## 1. Project Tech Stack

This project adheres strictly to the following technology stack. No new libraries or frameworks should be introduced without explicit approval.

*   **Core Framework:** React 19
*   **Language:** TypeScript
*   **Routing:** React Router DOM
*   **UI/Styling:** TailwindCSS
*   **Animations:** Framer Motion
*   **AI SDK:** Google Gemini API (`@google/genai`)
*   **Module System:** ES Modules with Import Maps (no build step)

---

## 2. Architecture & File Structure

The project follows a standard feature-based directory structure.

*   `/**`: Root contains `index.html`, `index.tsx`, `metadata.json`, and `App.tsx`.
*   `/components`: Reusable React components.
    *   `/components/common`: Generic, application-agnostic components (e.g., `Button.tsx`, `Card.tsx`).
    *   `/components/layout`: Components defining the page structure (e.g., `Header.tsx`, `Footer.tsx`).
*   `/context`: React context providers (e.g., `AuthContext.tsx`).
*   `/hooks`: Custom React hooks (e.g., `useAuth.ts`).
*   `/pages`: Top-level page components corresponding to routes.
*   `/services`: Modules for interacting with external APIs (e.g., `geminiService.ts`).
*   `/types.ts`: Shared TypeScript type definitions.
*   `/constants.ts`: Shared application constants.

**Function Granularity:** Functions should be short, single-purpose, and modular. A function longer than 30-40 lines is a candidate for refactoring. Avoid monolithic files with unrelated logic.

---

## 3. Coding Conventions

*   **Naming:**
    *   Variables & Functions: `camelCase`
    *   React Components & Types/Interfaces: `PascalCase`
    *   Files: `PascalCase` for components (`Button.tsx`), `camelCase` for hooks/services (`useAuth.ts`).
*   **Component Design:**
    *   Prefer functional components with React Hooks.
    *   Keep components focused on a single responsibility.
    *   Use props for parent-to-child communication and callbacks for child-to-parent.
*   **Styling:**
    *   Use TailwindCSS utility classes directly in JSX.
    *   Avoid inline styles (`style={{...}}`) unless for dynamic properties that cannot be handled by Tailwind classes.
    *   Define core brand colors in `constants.ts` and reference them conceptually.
*   **State Management:**
    *   Use `useState` for local component state.
    *   Use React Context for global state that doesn't change often (e.g., authentication status).

---

## 4. Code Quality & Review

*   **Incremental Changes:** Code should be generated in self-contained, logical chunks that are easy to review.
*   **Accessibility (A11y):** Ensure all interactive elements are accessible. Use semantic HTML, ARIA attributes where necessary, and ensure keyboard navigability.
*   **Performance:** Be mindful of performance. Avoid unnecessary re-renders and expensive computations in the render path.

---

## 5. Documentation

Documentation is crucial for maintainability.

*   **Components:** All common components should have JSDoc comments explaining their purpose, props, and usage.
*   **Complex Logic:** Any complex business logic or algorithm should be accompanied by comments explaining its purpose and approach.
*   **New Features:** New features should ideally be accompanied by updates to this guideline or a `README.md` if they introduce new patterns.
