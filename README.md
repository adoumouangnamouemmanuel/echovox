# Speech Support Research Project

A professional research documentation website presenting an ongoing speech articulation support research project. This platform documents and communicates research exploring how rhythm, music, and repetition can support speech development for a child with cerebral palsy.

## ⚠️ Important Context

**This website is NOT a speech-training solution, medical tool, or finalized product.**

It is a research, documentation, and awareness platform that:

- Explains what the project is about and why it matters
- Shares research insights and observations responsibly
- Demonstrates ethical, human-centered research practices
- Creates transparency for faculty, partners, and collaborators
- Serves as a reference for those interested in the project

## 🎯 Project Purpose

The website exists to:

1. Explain the research clearly to the public
2. Share insights and observations responsibly
3. Demonstrate ethical, human-centered research
4. Create transparency for faculty, partners, and future collaborators
5. Serve as a reference when people ask about the project

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **Animations**: Framer Motion (minimal, subtle use)

## 📁 Project Structure

```
speech/
├── app/
│   ├── page.tsx              # Home - About the Project
│   ├── problem/              # Problem Space
│   ├── approach/             # Research Approach
│   ├── findings/             # Current Findings & Insights
│   ├── ethics/               # Ethics & Privacy
│   ├── timeline/             # Project Timeline
│   ├── team/                 # Team Page
│   └── contact/              # Contact & Collaboration
├── components/
│   ├── layout/
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   └── page-header.tsx
│   ├── timeline/
│   │   └── timeline.tsx
│   └── ui/
│       ├── card.tsx
│       └── callout.tsx
├── lib/
│   ├── constants.ts          # Site config, team, timeline data
│   ├── metadata.ts           # SEO metadata
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript interfaces
```

## 🌍 Site Structure

### 1. Home Page – "About the Project"

The most important page. Clearly answers:

- What is this project?
- Why does it exist?
- Who is it for?
- What problem is being explored?

### 2. The Problem Space

Educates the public about:

- Speech articulation challenges
- Communication barriers
- The role of rhythm, music, and repetition in speech learning

### 3. Research Approach

Explains how the team is exploring the problem:

- Observational research
- Audio sample analysis
- Multimodal learning approaches
- Why AI is being considered (future work)

### 4. Current Findings & Insights

Shares learning responsibly using phrases like:

- "We observed..."
- "We are exploring..."
- "Early insights suggest..."

### 5. Ethics & Privacy

Critical page that builds trust:

- Anonymity protection
- Informed consent
- Child-first approach
- Research supervision
- Data security

### 6. Project Timeline

Shows structure and seriousness:

- Past milestones
- Current phase
- Planned next steps
- Future vision (clearly marked as exploratory)

### 7. Team Page

Lists contributors professionally with roles and areas of contribution

### 8. Contact / Collaboration Page

For faculty, researchers, institutions, and supporters

## 🎨 Design Philosophy

- **Research-grade professionalism**: Academic and credible
- **Calm, respectful tone**: Human-centered and compassionate
- **Modern academic-tech aesthetic**: Clean and contemporary
- **Easy navigation**: Clear structure and information hierarchy
- **Visually engaging but not playful**: Appropriate for the subject matter
- **Accessible to non-technical audiences**: Clear, jargon-free language

## ♿ Accessibility

The site follows WCAG accessibility guidelines:

- High contrast color schemes
- Large, readable text
- Semantic HTML structure
- ARIA labels where appropriate
- Full keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
bun run build
bun start
```

## 📋 Critical Disclaimers

The website prominently displays:

1. "This project is ongoing research."
2. "This platform is for documentation and awareness."
3. "This is not a medical or therapeutic solution."
4. "No individual can be identified from this site."

These appear throughout the site in callouts and notices.

## 🤝 Team

- **Emmanuel** - Lead Researcher
- **Emmanuel Adoum** - Technical Development
- **Ayshatu Mohammed** - Research Contributor
- **Chioma Chukuemeka** - Research Contributor
- **Vivance** - Research Contributor

## 📄 License

This project is for academic research purposes. All rights reserved.

## 📞 Contact

For research inquiries, collaboration opportunities, or questions, please use the contact form on the website.

**Note**: We are not enrolling participants or offering services at this time.

---

Built with ❤️ by the Speech Support Research Team
