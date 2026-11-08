# Athar Ali — Resume & Portfolio

A responsive, static portfolio website for showcasing my education, selected projects, technical skills and certificates.

**Live website:** https://aathal08.github.io/Resume-Page/

## Profile

B.Tech Computer Science & Engineering (Cyber Security) student at Parul University, Gujarat, India. Expected graduation: 2028.

The portfolio highlights hands-on work in application security, authentication workflow analysis, Python, full-stack development, networking and operating-system fundamentals.

## Featured projects

The project cards on the website link to the following repositories:

| Project | Focus | Source |
|---|---|---|
| Secure Task Manager | Full-stack web application and application security | [Repository](https://github.com/aathal08/secure-task-manager) |
| World Bank Climate Finance Tracker | Python data analysis and Streamlit dashboard | [Repository](https://github.com/aathal08/world-bank-climate-finance-tracker) |
| NPTEL Login Workflow Analysis | Python, HTTP and workflow analysis | [Repository](https://github.com/aathal08/NPTEL-login) |
| Parul University GNUMS Authentication Assessment | Authentication workflow assessment | [Repository](https://github.com/aathal08/Parul-University-Student-GNUMS-Login-Bruteforce) |
| Fatima Ideals Girls Academy Website | Responsive frontend website | [Repository](https://github.com/aathal08/fatima-ideals-girls-academy) |

The portfolio also includes an additional authentication workflow project card. Existing project cards and repository links are intentionally retained when updating the Skills section.

## Repository structure

```text
Resume-Page/
├── index.html                 # Portfolio content and sections
├── style.css                  # Responsive layout, theme and visual styles
├── script.js                  # Theme toggle, mobile navigation and footer year
├── README.md
└── certificates/              # Certificate PDFs and inventory
    └── README.md
```

## Run locally

No build process or package installation is required.

```bash
git clone https://github.com/aathal08/Resume-Page.git
cd Resume-Page
python -m http.server 8000
```

Open http://localhost:8000 in your browser. Alternatively, open `index.html` directly.

## Deployment

This is a static HTML, CSS and JavaScript website. It can be published with GitHub Pages from the `main` branch and repository root.

## Certificates

Certificate files are stored in [`certificates/`](certificates/). The website links to the PDFs in that directory. Refer to [the certificate inventory](certificates/README.md) when adding or updating credentials.

## Accessibility and features

- Responsive navigation for desktop and mobile layouts.
- Keyboard-visible focus styles and a skip-to-content link.
- Light/dark theme toggle with browser preference persistence where storage is available.
- Reduced-motion support.

## Maintenance

- Keep skill claims consistent with the latest resume and practical experience.
- Update project descriptions and source links when a project changes.
- When adding a certificate, add its PDF, portfolio link and inventory entry together.
- Keep the portfolio broad; tailor individual resumes to the specific role.
