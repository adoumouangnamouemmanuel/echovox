import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Speech Support Research Project",
    template: "%s | Speech Support Research",
  },
  description:
    "A research and documentation platform exploring speech articulation support through rhythm, music, and repetition",
  keywords: [
    "speech research",
    "articulation",
    "cerebral palsy",
    "music therapy",
    "rhythm",
    "research documentation",
  ],
  authors: [{ name: "Speech Support Research Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Speech Support Research Project",
    description:
      "Documentation and research platform for speech articulation support",
    siteName: "Speech Support Research",
  },
  robots: {
    index: true,
    follow: true,
  },
};
