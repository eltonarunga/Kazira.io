# Privacy data-flow inventory

**Status:** repository-level source review and connected Jotform form-metadata review completed; Kazira LLC identified by the user as legal data controller; provisional privacy contact supplied; service-owner and provider-console verification outstanding.  
**Reviewed:** 17 November 2026  
**Scope:** the public Kazira corporate website in this repository, not separate products or external applications.

This document records what can be established from checked-in source and the connected Jotform form metadata available during review. It is not a substitute for full provider-console inspection, a production traffic review, or legal advice. No submission contents were accessed for this review.

## Confirmed from repository source and connected form metadata

| Area | Evidence | What can safely be concluded |
|---|---|---|
| Website hosting | Vite-built React application; `vercel.json`; README deployment notes | The repository is configured for Vercel deployment. The actual production project settings, logs, region, retention, and subprocessors are not visible here. |
| Contact / enquiry form | `constants.ts` defines `JOTFORM_UPDATES_URL` as `https://form.jotform.com/260052273727050`; `JotformModal.tsx` embeds the supplied URL in an iframe and provides an external link | Form content is hosted by Jotform, not rendered as a first-party form in this repository. |
| Form fields | Connected Jotform metadata for form `260052273727050` (title: **Kazira.io**) reports the questions **Name**, **Email**, **Primary purpose**, **Describe what update or consultation you are requesting**, and **Verification**, alongside form title/submit controls. | The form collects name and email, a purpose selection, and a free-text request. The free-text field may allow respondents to volunteer information beyond the structured fields; metadata alone does not establish whether sensitive or health information is invited, prohibited, or processed downstream. |
| Jotform privacy notice | Jotform's published privacy policy states that form data is stored in the United States by default and that customers may choose EU storage. | This is Jotform's general published statement, not evidence of the region selected for Kazira's form; the actual account setting remains unverified. |
| Form activity | The connected Jotform metadata reports the form is enabled and has 2 submissions as of the review. Submission contents were not opened or inspected. | This confirms the form is active and has received submissions, but says nothing about the contents or handling of those submissions. |
| Form contexts | Landing-page modal uses `JotformModal`; the modal defaults to the shared Jotform URL unless a different `formUrl` is passed. Automation and sector pages link directly to the same Jotform URL. | Multiple calls to action lead to the same configured Jotform endpoint in the inspected source. |
| Third-party fonts | `index.html` preconnects to and loads CSS/fonts from `fonts.googleapis.com` and `fonts.gstatic.com`. | A browser loading the site requests font resources from Google. The repository does not establish Google-side logging, retention, or applicable processing terms. |
| External product links | `constants.ts` and page source link to Opal/Google, KAARB on Vercel, KaziX on Vercel, Dentside Remote on Render, JinoX AI, and Kazira Clinical Intelligence (`https://kazira-io-clinical-intelligence-mvp.vercel.app/`), and DentMatch KE (`https://dent-match-ke.vercel.app/`). | These are links to separate services. The repository does not establish their data collection, ownership, processors, or privacy practices. |
| First-party account / payment / AI backend | Recursive source tree contains a static React/Vite frontend and no checked-in API/server route, auth SDK, payment SDK, or model API integration in the reviewed files. | No such first-party processing flow was identified in this repository snapshot. This does not prove that no separate backend, provider integration, or external service exists. |

## Source locations and connected resource reviewed

- `constants.ts`
- `index.html`
- `App.tsx`
- `pages/LandingPage.tsx`
- `pages/KaziraAutomatePage.tsx`
- `pages/SectorAutomationPage.tsx`
- `components/common/JotformModal.tsx`
- `vercel.json`
- `README.md`
- Connected Jotform form metadata for form `260052273727050` (metadata only; no submission records inspected)
- Jotform published privacy policy: https://www.jotform.com/privacy/

## Not established by this review

The following facts require confirmation by the relevant service owner or account administrator. Do not publish guesses:

- Whether `support@kazira.io` is provisioned, monitored, and able to receive privacy requests. The user supplied it as a **placeholder privacy contact**, not as a verified operational mailbox. The user identified Kazira LLC as the legal data controller on 17 November 2026; this is recorded as an owner-provided fact, not independently verified against corporate registration documents.
- Jotform form owner, collaborators, submission recipients, integrations, export destinations, retention, deletion, backups, and hosting region.
- Whether the free-text request field is intended to accept sensitive or health information, and what instructions or safeguards are shown to respondents.
- Vercel project owner, production deployment configuration, logs and analytics settings, retention, regions, and subprocessors.
- Whether Google Fonts requests are retained or used for any additional processing under the applicable provider terms.
- Whether external product links have their own forms, analytics, accounts, or data sharing.
- Actual production analytics, cookies, pixels, email/CRM integrations, server logs, or other scripts that may be configured outside this repository.
- Any separate backend or product flows not included in this repository.
- Applicable retention schedule, legal bases, cross-border transfer safeguards, data-subject request process, and deletion workflow.

## Work completed in the website repository

- [x] Record the owner-provided controller identity, Kazira LLC.
- [x] Inventory the website enquiry form and its visible fields using Jotform form metadata; no submission contents were inspected.
- [x] Replace unsupported public-policy statements about accounts, AI-model interactions, transactions, advanced monitoring, robust security, and strict confidentiality assurances with a limited description of the observed corporate-site data flows.
- [x] Explain that the enquiry form is hosted by Jotform and link to Jotform's published privacy policy.
- [x] Add a warning not to submit patient details, health information, or other sensitive information through the form.

## Required owner verification

- [x] Record the user-provided controller identity: Kazira LLC (17 November 2026). Independent corporate-registration verification remains outside this repository review.
- [ ] Replace/confirm the placeholder privacy contact with a provisioned, monitored mailbox: `support@kazira.io`.
- [ ] Confirm the Jotform form owner, people and systems with access, integrations, notification recipients, export destinations, retention, deletion, backups, and the actual selected data region. Jotform's general policy says US storage by default with an EU option; Kazira's setting is not known.
- [ ] Confirm whether the free-text field should invite or prohibit sensitive information, and add clear respondent guidance if needed.
- [ ] Inspect Vercel production project settings for analytics, logs, deployment region, access, retention, and subprocessors.
- [ ] Inspect production browser network requests and cookies to identify resources not represented in source.
- [ ] Confirm the owner and privacy notice for each linked external product before describing it as a Kazira-operated service.
- [ ] Confirm whether separate account, payment, AI inference, or customer-management systems exist and whether they are in scope of this website notice.
- [ ] Verify Kazira LLC's legal identity against corporate records and confirm the monitored privacy contact.
- [ ] Have qualified Kenyan data-protection counsel review the public notice and any cross-border processing disclosures before treating it as final.

## Interim implementation guidance

- Keep the existing Jotform hand-off description factual: the form is hosted by Jotform.
- Do not claim that the form is confidential, encrypted end-to-end, or covered by particular retention or deletion terms unless verified in the account and provider agreement.
- Do not state that the corporate website itself runs AI inference, account authentication, or payment processing based only on planned capabilities or links to other products.
- Treat the displayed privacy email as provisional until the mailbox is provisioned and monitored.
- Do not update the public Privacy Policy or Terms with invented legal bases, retention periods, or processor lists.
