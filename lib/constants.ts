export const SITE_CONFIG = {
  name: "Speech Support Research Project",
  description:
    "A research and documentation platform exploring speech articulation support through rhythm, music, and repetition",
  url: "https://speech-research.vercel.app",
  disclaimer:
    "This project is ongoing research. This platform is for documentation and awareness, not a medical or therapeutic solution.",
};

export const TEAM_MEMBERS = [
  {
    name: "Emmanuel",
    role: "Lead Researcher",
  },
  {
    name: "Emmanuel Adoum",
    role: "Technical Development",
  },
  {
    name: "Ayshatu Mohammed",
    role: "Research Contributor",
  },
  {
    name: "Chioma Chukuemeka",
    role: "Research Contributor",
  },
  {
    name: "Vivance",
    role: "Research Contributor",
  },
];

export const NAV_ITEMS = [
  { href: "/", label: "About" },
  { href: "/problem", label: "Problem Space" },
  { href: "/approach", label: "Research Approach" },
  { href: "/findings", label: "Findings" },
  { href: "/timeline", label: "Timeline" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const TIMELINE_PHASES = [
  {
    phase: "Initial Observation",
    period: "November 2025",
    status: "completed" as const,
    description:
      "Began observational research on speech articulation challenges and communication patterns.",
  },
  {
    phase: "Pattern Recognition",
    period: "December 2025 - January 2026",
    status: "current" as const,
    description:
      "Exploring connections between rhythm, music, and speech engagement through systematic observation.",
  },
  {
    phase: "Methodological Development",
    period: "February - April 2026",
    status: "planned" as const,
    description:
      "Developing structured approaches combining audio, visual, and interactive elements for multimodal learning.",
  },
  {
    phase: "Future Exploration",
    period: "Mid 2026 onwards",
    status: "planned" as const,
    description:
      "Investigating technological augmentation and AI-assisted approaches for personalized speech practice support.",
  },
];
