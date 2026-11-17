# Privacy data-flow inventory

**Status:** repository-level source review completed; service-owner and provider-console verification outstanding.  
**Reviewed:** 17 November 2026  
**Scope:** the public Kazira corporate website in this repository, not separate products or external applications.

This document records what can be established from the checked-in source. It is not a substitute for provider-console inspection, a production traffic review, or legal advice.

## Confirmed from repository source

| Area | Evidence in source | What can safely be concluded |
|---|---|---|
| Website hosting | Vite-built React application; `vercel.json`; README deployment notes | The repository is configured for Vercel deployment. The actual production project settings, logs, region, retention, and subprocessors are not visible here. |
| Contact / enquiry form | `constants.ts` defines `JOTFORM_UPDATES_URL` as `https://form.jotform.com/260052273727050`; `JotformModal.tsx` embeds the supplied URL in an iframe and provides an external link | Form content is hosted by Jotform, not rendered as a first-party form in this repository. The source does not reveal the fields, account owner, submission recipients, storage settings, retention, or deletion process. |
| Form contexts | Landing-page modal uses `JotformModal`; the modal defaults to the shared Jotform URL unless a different `formUrl` is passed. Automation and sector pages link directly to the same Jotform URL. | Multiple calls to action lead to the same configured Jotform endpoint in the inspected source. Verify the live form and its fields in the Jotform account. |
| Third-party fonts | `index.html` preconnects to and loads CSS/fonts from `fonts.googleapis.com` and `fonts.gstatic.com`. | A browser loading the site requests font resources from Google. The repository does not establish Google-side logging, retention, or applicable processing terms. |
| External product links | `constants.ts` and page source link to Opal/Google, KAARB on Vercel, KaziX on Vercel, and Dentside Remote on Render. | These are links to separate services. The repository does not establish their data collection, ownership, processors, or privacy practices. |
| First-party account / payment / AI backend | Recursive source tree contains a static React/Vite frontend and no checked-in API/server route, auth SDK, payment SDK, or model API integration in the reviewed files. | No such first-party processing flow was identified in this repository snapshot. This does not prove that no separate backend, provider integration, or external service exists. |

## Source locations reviewed

- `constants.ts`
- `index.html`
- `App.tsx`
- `pages/LandingPage.tsx`
- `pages/KaziraAutomatePage.tsx`
- `pages/SectorAutomationPage.tsx`
- `components/common/JotformModal.tsx`
- `vercel.json`
- `README.md`

## Not established by source review

The following facts require confirmation by the relevant service owner or account administrator. Do not publish guesses:

- The legal entity / person acting as data controller and its verified privacy contact.
- Exact Jotform questions, whether free-text fields invite sensitive or health information, form owner, collaborators, submission recipients, integrations, export destinations, retention, deletion, backups, and hosting region.
- Vercel project owner, production deployment configuration, logs and analytics settings, retention, regions, and subprocessors.
- Whether Google Fonts requests are retained or used for any additional processing under the applicable provider terms.
- Whether external product links have their own forms, analytics, accounts, or data sharing.
- Actual production analytics, cookies, pixels, email/CRM integrations, server logs, or other scripts that may be configured outside this repository.
- Any separate backend or product flows not included in this repository.
- Applicable retention schedule, legal bases, cross-border transfer safeguards, data-subject request process, and deletion workflow.

## Required owner verification

- [ ] Open the configured Jotform form in the owner account and record every field, including optional and free-text fields.
- [ ] Confirm the controller, form owner, people and systems with access, integrations, notification recipients, export destinations, retention, deletion, backups, and data location.
- [ ] Inspect Vercel production project settings for analytics, logs, deployment region, access, retention, and subprocessors.
- [ ] Inspect production browser network requests and cookies to identify resources not represented in source.
- [ ] Confirm the owner and privacy notice for each linked external product before describing it as a Kazira-operated service.
- [ ] Confirm whether separate account, payment, AI inference, or customer-management systems exist and whether they are in scope of this website notice.
- [ ] Verify the controller identity and monitored privacy contact.
- [ ] Have qualified Kenyan data-protection counsel review the final public notice and any cross-border processing disclosures.

## Interim implementation guidance

- Keep the existing Jotform hand-off description factual: the form is hosted by Jotform.
- Do not claim that the form is confidential, encrypted end-to-end, or covered by particular retention or deletion terms unless verified in the account and provider agreement.
- Do not state that the corporate website itself runs AI inference, account authentication, or payment processing based only on planned capabilities or links to other products.
- Do not update the public Privacy Policy or Terms with invented controller details, legal bases, retention periods, or processor lists.
