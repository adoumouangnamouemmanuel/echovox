"use client";

import { TIMELINE_PHASES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Circle, Clock } from "lucide-react";

export default function Timeline() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-6 w-6 text-white" />;
      case "current":
        return <Clock className="h-6 w-6 text-white" />;
      default:
        return <Circle className="h-6 w-6 text-white" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-500";
      case "current":
        return "from-blue-500 to-blue-600";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white/80 px-6 py-3 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Research Journey</span>
            </div>
            <h1 className="mb-4 text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Project Timeline
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Our research journey from inception to future vision
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Timeline */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Research Milestones
              </span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-800" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-gray-300" />

            <div className="space-y-12">
              {TIMELINE_PHASES.map((event, index) => (
                <motion.div
                  key={event.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Status Icon */}
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {getStatusIcon(event.status)}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="group relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getStatusColor(
                        event.status
                      )} opacity-0 transition-opacity group-hover:opacity-5`}
                    />

                    <div className="relative">
                      <div className="mb-2 text-sm font-medium text-gray-500">
                        {event.period}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold">{event.phase}</h3>
                      <p className="text-gray-600">{event.description}</p>

                      {/* Status Badge */}
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                        {event.status === "completed" && "✅ Completed"}
                        {event.status === "current" && "🕐 In Progress"}
                        {event.status === "planned" && "⭕ Planned"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Future Vision
              </span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-800" />
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-10 text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              We envision expanding this research through collaboration with
              speech professionals, exploring technology-supported approaches,
              and potentially developing tools that could support personalized
              speech practice. This remains exploratory and will always
              prioritize ethical, evidence-based practices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
