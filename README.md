# NovaTech IT Solutions

A single-page website for NovaTech IT Solutions, a technology agency offering software services to modern businesses.

## Overview

The site presents NovaTech's services and provides a simple way for prospective clients to start a conversation. It includes:

- A branded navigation header with Home, About Us, Contact, and Get a Quote links
- A hero section describing full-stack web application and machine learning services
- Service cards for full-stack development, AI and machine learning, and quality assurance
- A contact section with company details and a consultation form
- A footer with company information and placeholder policy links

## Technology

- React 19
- Vite
- JavaScript and JSX
- CSS
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Current Behavior

The contact form is currently a front-end form only; it does not send data to a backend or email service. The Privacy Policy and Terms of Service links are placeholders.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with Oxlint |

## Project Structure

```text
src/
├── components/
│   ├── About.jsx       # Services and company description
│   ├── Contact.jsx     # Contact information and form
│   ├── Footer.jsx      # Company footer
│   ├── Header.jsx      # Navigation and quote link
│   └── Hero.jsx        # Main introduction and calls to action
├── App.jsx
├── App.css             # Site layout and component styles
├── index.css           # Global Vite styles
├── main.jsx            # React entry point
└── assets/
	└── hero.png
public/
├── favicon.svg
└── icons.svg
```

