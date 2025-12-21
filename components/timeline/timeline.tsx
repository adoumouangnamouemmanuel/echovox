"use client";

import { cn } from "@/lib/utils";
import type { TimelinePhase } from "@/types";
import { CheckCircle, Circle, Clock } from "lucide-react";

interface TimelineProps {
  phases: TimelinePhase[];
}

export function Timeline({ phases }: TimelineProps) {
  return (
    <div className="relative">
      {phases.map((phase, index) => {
        const isLast = index === phases.length - 1;
        const Icon =
          phase.status === "completed"
            ? CheckCircle
            : phase.status === "current"
            ? Clock
            : Circle;

        return (
          <div key={index} className="relative pb-12">
            {/* Vertical Line */}
            {!isLast && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300" />
            )}

            {/* Content */}
            <div className="flex gap-6">
              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2",
                    phase.status === "completed" &&
                      "bg-green-100 border-green-500 text-green-600",
                    phase.status === "current" &&
                      "bg-blue-100 border-blue-500 text-blue-600 ring-4 ring-blue-100",
                    phase.status === "planned" &&
                      "bg-gray-100 border-gray-300 text-gray-400"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {phase.phase}
                  </h3>
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium",
                      phase.status === "completed" &&
                        "bg-green-100 text-green-700",
                      phase.status === "current" && "bg-blue-100 text-blue-700",
                      phase.status === "planned" && "bg-gray-100 text-gray-600"
                    )}
                  >
                    {phase.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{phase.period}</p>
                <p className="text-gray-600 mb-4">{phase.description}</p>

                {/* Milestones */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Milestones:
                  </h4>
                  <ul className="space-y-1.5">
                    {phase.milestones.map((milestone, mIndex) => (
                      <li
                        key={mIndex}
                        className="text-sm text-gray-600 flex gap-2"
                      >
                        <span className="text-gray-400">•</span>
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
