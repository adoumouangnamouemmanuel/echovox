"use client";

import { Callout } from "@/components/ui/callout";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Findings() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <div className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            alt="Data and insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-slate-900/90" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] " />
          </div>
        </div>

        {/* Floating Elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * 400,
              opacity: 0.3,
            }}
            animate={{
              y: [null, Math.random() * 400],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">
                Early-Stage Observations
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight"
            >
              Current{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Findings
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              Early observations and patterns from our ongoing research
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              className="fill-slate-50"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Callout type="warning" title="Important Context" className="mb-16">
            These are preliminary observations from early-stage research. They
            do not constitute scientific conclusions or therapeutic
            recommendations.
          </Callout>
        </motion.div>

        {/* Key Observations */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Key Observations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Patterns emerging from our research activities
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                title: "Musical Rhythm Engagement",
                observation:
                  "Increased engagement and sustained attention when speech practice is embedded in musical rhythm",
                details: [
                  "More consistent vocal attempts with rhythmic beats",
                  "Reduced frustration during repetitive practice with music",
                  "Better sustained focus in longer practice sessions",
                ],
                color: "from-blue-500 to-indigo-500",
              },
              {
                title: "Multimodal Integration",
                observation:
                  "Visual + auditory combinations appeared to support learning more than single modalities",
                details: [
                  "More frequent attempts when showing images alongside words",
                  "Visual reinforcement helped maintain attention",
                  "Written words alongside speech supported sound-symbol connections",
                ],
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Engagement Patterns",
                observation:
                  "Distinct differences in engagement based on presentation mode and timing",
                details: [
                  "Shorter, varied sessions more effective than longer monotonous ones",
                  "Interactive elements requiring participation maintained interest",
                  "Familiar melodies increased willingness to engage",
                ],
                color: "from-cyan-500 to-blue-500",
              },
              {
                title: "Practice Balance",
                observation:
                  "Productive learning when repetition balanced with variation",
                details: [
                  "Same words with varied melodies maintained engagement",
                  "Variation in rhythm or visuals sustained interest",
                  "Exact repetition without change led to quicker disengagement",
                ],
                color: "from-blue-600 to-indigo-600",
              },
            ].map((finding, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-200 overflow-hidden">
                  {/* Decorative gradient corner */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${finding.color} opacity-10 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500`}
                  />

                  <div className="relative">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {finding.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {finding.observation}
                      </p>
                    </div>
                    <div className="bg-blue-50/50 rounded-2xl p-5 ml-19">
                      <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide text-blue-600">
                        Specific patterns noticed:
                      </p>
                      <ul className="space-y-2.5">
                        {finding.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center mt-0.5 flex-shrink-0">
                              <span className="text-white text-xs font-bold">
                                {i + 1}
                              </span>
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Learning Modes Explored */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 p-10 md:p-12"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
                Learning Modes Explored
              </h2>
              <p className="text-lg text-blue-100 mb-10 text-center max-w-2xl mx-auto">
                We've experimented with various combinations of sensory input:
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "Auditory",
                    items: [
                      "Spoken words",
                      "Sung phrases",
                      "Rhythmic beats",
                      "Musical backgrounds",
                    ],
                  },
                  {
                    title: "Visual",
                    items: [
                      "Static images",
                      "Simple animations",
                      "Written words",
                      "Color coding",
                    ],
                  },
                  {
                    title: "Interactive",
                    items: [
                      "Call and response",
                      "Touch interactions",
                      "Imitation games",
                      "Feedback loops",
                    ],
                  },
                ].map((mode, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-4 text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {mode.title}
                    </h4>
                    <ul className="space-y-3">
                      {mode.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs font-bold">
                              {i + 1}
                            </span>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Ongoing Questions */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions We're Still Exploring
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Areas of ongoing investigation and curiosity
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "What is the optimal balance between structure and spontaneity?",
              "How do we measure genuine learning versus temporary engagement?",
              "Can patterns transfer to natural communication contexts?",
              "What role might technology play in tracking progress?",
              "How do we support independence rather than create dependence?",
            ].map((question, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  ?
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {question}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Callout type="info" title="Responsible Interpretation">
            These observations inform our ongoing work but do not constitute
            evidence of effectiveness. Every individual is unique, and what we
            observe in one context may not generalize.
          </Callout>
        </motion.div>
      </div>
    </div>
  );
}
