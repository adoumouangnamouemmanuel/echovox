export interface TimelinePhase {
  phase: string;
  period: string;
  status: "completed" | "current" | "planned";
  description: string;
  milestones: string[];
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface NavItem {
  href: string;
  label: string;
}
