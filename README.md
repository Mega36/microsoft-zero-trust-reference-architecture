# Microsoft Zero Trust Reference Architecture

This repository provides a synthetic enterprise Microsoft Zero Trust architecture demonstrating identity-first security, endpoint trust, Conditional Access, privileged access, application federation, security monitoring, and enterprise Microsoft architecture.

## Purpose

A public portfolio architecture deliverable by **Stefen St. Jules**, Principal Enterprise IT & Cybersecurity Consultant at **ZenTechnology LLC**. The interactive portal helps business and technology leaders explore design decisions, control responsibilities, and a phased security roadmap.

**Summit Ridge Enterprises is fictional:** 1,200 employees, 1,450 managed devices, 110 applications, 12 offices, and a hybrid workforce. The scenario includes remote users, contractors, Windows and mobile endpoints, Microsoft cloud services, and third-party SaaS.

## Architecture

A dependency-free HTML5, CSS, and JavaScript application. Root `index.html` renders the full architecture narrative; local deferred scripts populate interactive synthetic dashboards. No external fonts, images, analytics, or runtime dependencies are requested.

```
index.html
assets/
  favicon.svg
  css/main.css
  js/app.js
  data/demo.js
README.md
LICENSE
.gitignore
```

The eight visual models cover enterprise access, Conditional Access evaluation, identity lifecycle, Intune device trust, security operations, privileged access, application federation, and maturity. Clickable components expose design rationale. Policy controls, incident severity, security controls, maturity domains, RBAC roles, compliance categories, and roadmap phases work entirely in the browser.

## Zero Trust Principles

- **Verify explicitly:** evaluate identity, device health, application, authentication strength, risk, and session context.
- **Least privilege access:** scope RBAC and entitlement ownership; approve time-limited administrative elevation.
- **Assume breach:** collect signals, correlate detections, investigate, contain, remediate, and validate recovery.

## Microsoft Technologies Demonstrated

Microsoft 365, Azure, Entra ID, Intune, Defender, Sentinel, Exchange Online, SharePoint Online, Teams, OneDrive, Power Platform, and Microsoft Graph concepts. Product references describe an independent conceptual architecture; no Microsoft services are called.

## Identity Architecture

Workforce, guest, administrative, service, application, and managed identity concepts support SSO, federation, MFA, passwordless authentication, Conditional Access, and joiner-mover-leaver governance. A sample policy explorer and sign-in simulator explain accumulated requirements and block precedence.

The simulator is an educational approximation, not an executable Microsoft policy engine or policy export. It uses five fictional policies, chooses block for high-risk sign-ins, and restricts contractor access to sensitive resources. Emergency access, workload identity policy design, actual evaluation semantics, licensing, and deployment validation require a separate implementation engagement.

## Device Trust

The device estate contains 1,050 Windows, 110 macOS, 185 iOS, and 105 Android devices. Sample health categories include encryption, operating system version, protection, firewall, secure boot, health, patching, and configuration. Platform-specific applicability requires validation in a real architecture.

## Security Operations

Conceptual Defender and Sentinel flows connect telemetry to analytics, investigation, governed automation, and containment. The queue contains six illustrative incidents from a fictional total of 17. Connector availability, duplication, retention, cost, and licensing are implementation considerations.

## Demo Data

All scenario data is local in `assets/data/demo.js`. Values are illustrative rather than measured. Privileged accounts overlap the identity population. Endpoint protection percentages are rounded. The overall 78% maturity assessment is a scenario headline, not a mathematical average of the eight domain percentages or a Microsoft certification.

## Deployment

No npm build, backend, database, credentials, authentication, or environment variables are required.

### Hostinger

Deploy this repository as **static website files**, not as a Node.js application. The website document root must contain `index.html` and the complete `assets/` directory with their relative paths preserved.

If your Hostinger plan offers a Git repository deployment workflow, select this repository and its intended branch, set its deployment destination to the website document root, and configure no build command. Otherwise, use Hostinger File Manager or SFTP to upload `index.html` and `assets/` into the domain's `public_html` directory. Hosting features differ by plan; this repository requires only static file serving.

After deployment, open the actual public URL and verify styles, navigation, mobile menu, policy simulation, filters, diagrams, and browser console. Hostinger-specific live deployment cannot be verified without a configured hosting destination and a public URL.

### Local preview

Open `index.html` directly, or use a static server for verification:

```sh
python3 -m http.server 8080
```

Open the local server in your browser. Python is a preview convenience, not a deployment dependency.

## Security

- No Microsoft tenant is connected.
- No API keys are required.
- No credentials are stored.
- No customer data is used.
- No real infrastructure is represented.
- All demonstration data is synthetic.
- No network APIs, authentication flows, telemetry collectors, or persistent browser storage are used.

### Demonstration Architecture

This project is a synthetic enterprise Zero Trust reference architecture. All users, devices, applications, policies, identities, domains, infrastructure, security findings, and configurations are fictional. The application is not connected to Microsoft, Azure, Entra ID, Intune, Defender, Sentinel, or any production environment.

The engagement CTA opens an editable brief for manual copying. Nothing is sent or stored. Share it through an existing verified contact channel; no contact address is fabricated in this project.

## Accessibility and performance

Semantic landmarks, accessible tables, labeled form controls, keyboard-operable buttons and accordions, dialog focus handling, visible focus states, reduced-motion support, and responsive layouts. Roadmap tabs support arrow keys, Home, and End. Charts have readable labels and numeric values. All assets are local and the site uses system fonts.

## Verification

Desktop and mobile browser interaction checks passed, with no browser errors. Direct file loading was also verified. See [VERIFICATION.md](VERIFICATION.md) for the test scope, repeatable assertions, and live deployment boundary.

## Author

**Stefen St. Jules**<br>
Principal Enterprise IT & Cybersecurity Consultant<br>
**ZenTechnology LLC**

## License

Apache License 2.0. See [LICENSE](LICENSE). Microsoft product names are trademarks of their respective owners. This is an independent portfolio demonstration.
