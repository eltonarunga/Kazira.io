# Dependency security exception register

**Reviewed:** 17 November 2026  
**Scope:** build and test dependency tree for the Kazira.io corporate website.

## Current advisory

- **Package:** `picomatch`
- **Advisory:** [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) / CVE-2026-112366
- **Severity:** High
- **Affected published versions:** through 4.0.7
- **Dependency path observed in CI:** `vitest` / `vite` → `tinyglobby` / `fdir` → `picomatch`
- **Exposure in this project:** the affected dependency is used by the development/build/test toolchain. The corporate website does not expose an application feature that accepts arbitrary glob patterns from website visitors. This reduces the directly exposed surface but does not make the vulnerable package fixed or risk-free.
- **Upstream status at review:** no patched npm release was identified. Upstream remediation proposals remain under review: [PR #237](https://github.com/micromatch/picomatch/pull/237) and [PR #238](https://github.com/micromatch/picomatch/pull/238).

## CI treatment

- Production dependencies remain a blocking security gate: `npm audit --omit=dev --audit-level=high`.
- The full dependency audit still runs and reports development-tool advisories, but is non-blocking while this specific upstream issue has no published fixed version.
- Vite, the Tailwind Vite plugin, and Tailwind CSS are classified as development/build dependencies rather than runtime dependencies.
- Do not add an npm override to an unmerged upstream branch or downgrade the test/build stack blindly. Reassess as soon as a fixed picomatch release is published.

## Exit criteria

- [ ] A fixed picomatch release is published.
- [ ] Update the dependency tree and lockfile to the fixed release.
- [ ] Restore a blocking full-tree `npm audit --audit-level=high` gate.
- [ ] Verify clean install, lint, tests, type-check, production build, and Vercel deployment.
