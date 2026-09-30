# Verification record

Verified locally on September 30, 2026 using Chrome with agent-browser.

- Static HTTP preview loaded successfully with local CSS, JavaScript, favicon, and inline SVG.
- Direct `file://` loading of root `index.html` populated all five policies, 32 metrics, and 12 controls without a server.
- Desktop and 390 × 844 mobile viewports passed 26 browser assertions each.
- Architecture selection, policy details, compliant device requirements, administrator authentication strength, legacy blocking, high-risk blocking, contractor restrictions, and limited sessions passed.
- Category/search filtering, empty results, incident filtering, compliance detail, RBAC, maturity detail, and metric dialogs passed.
- Roadmap tabs and Home-key navigation passed.
- Consulting capability and engagement-brief dialogs passed.
- Mobile navigation opened, selected the Devices section, and closed correctly.
- No horizontal page overflow was detected at either tested viewport.
- All 13 navigation targets and internal fragment links resolved.
- Browser errors and console logs were empty during verification.
- Runtime resources were local. JavaScript syntax, unique HTML IDs, local asset paths, and secret-pattern checks passed.
- Runtime files total approximately 87 KB, excluding documentation and test files.

## Repeat browser assertions

`tests/browser-check.js` contains the meaningful interaction assertions. It uses browser APIs only and does not ship as a runtime script. Serve the repository using any static file server, open it in a test browser, and evaluate the script. For agent-browser:

```sh
agent-browser open http://localhost:8080
agent-browser eval --stdin < tests/browser-check.js
```

Run at both desktop and mobile viewports. The script intentionally changes selections while testing.

## Deployment boundary

**A live Hostinger deployment has not been performed or verified.** No Hostinger destination, deployment integration, or public site URL was supplied. The repository is ready for static file hosting; verify the actual deployed URL using the README deployment checklist.

Clipboard copying requires browser permission or a secure context. When clipboard access is unavailable, the engagement dialog selects the brief for manual copying. No information is sent or stored.
