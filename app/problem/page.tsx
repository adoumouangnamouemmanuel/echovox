"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

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

const challengeDetails = {
  0: {
    title: "Motor Planning Difficulty",
    fullDescription:
      "Motor planning difficulty, also known as apraxia of speech, occurs when the brain struggles to plan and coordinate the precise, rapid movements of the lips, tongue, jaw, and palate needed for speech. This isn't a muscle weakness issue—the muscles work fine. Instead, it's the brain's ability to send the right signals in the right order that's compromised.",
    impacts: [
      "Inconsistent errors in speech production",
      "Difficulty transitioning between sounds",
      "Increased errors with longer or more complex words",
      "May understand language perfectly but struggle to speak",
    ],
    interventions:
      "Effective interventions often include intensive, systematic practice with multisensory cues (visual, auditory, tactile). Music-based approaches may help by providing rhythmic structure that supports motor sequencing.",
  },
  1: {
    title: "Articulation Inconsistency",
    fullDescription:
      "Articulation inconsistency refers to the unpredictable nature of speech sound production. A person might correctly produce a sound in one context (like 'cat') but struggle with the same sound in another word (like 'kite'). This variability makes it difficult to predict which words will be challenging and when.",
    impacts: [
      "Frustration from unpredictable success",
      "Difficulty generalizing learned sounds to new contexts",
      "Reduced confidence in speaking situations",
      "Challenges with spontaneous speech vs. practiced words",
    ],
    interventions:
      "Treatment focuses on practicing target sounds in varied contexts, positions, and complexity levels. Consistent practice with immediate feedback helps build more reliable motor patterns.",
  },
  2: {
    title: "Limited Practice Tools",
    fullDescription:
      "While speech therapy is highly effective, it typically occurs 1-2 times per week. The real challenge is maintaining engagement during home practice, which is crucial for progress. Many available practice tools are either too clinical and boring, or too game-like without addressing specific therapeutic needs.",
    impacts: [
      "Reduced practice frequency at home",
      "Lower motivation for repetitive drills",
      "Slower progress due to limited practice",
      "Caregiver burnout from managing practice sessions",
    ],
    interventions:
      "The ideal solution combines evidence-based therapeutic approaches with engaging, game-like elements. Music and rhythm can make practice more enjoyable while providing therapeutic benefits through structured timing and movement.",
  },
  3: {
    title: "Feedback Gaps",
    fullDescription:
      "Many individuals with speech challenges struggle to perceive their own errors. They may not hear the difference between their production and the target sound, making self-correction nearly impossible without external feedback. This creates dependence on a therapist or caregiver to provide correction.",
    impacts: [
      "Inability to self-monitor during practice",
      "Repeated practice of incorrect patterns",
      "Dependence on others for feedback",
      "Limited generalization to real-world settings",
    ],
    interventions:
      "Visual and auditory feedback systems can help bridge this gap. Real-time feedback through technology, combined with enhanced sensory cues (like visual representations of sound or rhythmic patterns), can help individuals learn to self-monitor more effectively.",
  },
};

export default function Problem() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <div className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop"
            alt="Learning and development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-slate-900/90" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] " />
          </div>
        </div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
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
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-white">
                Understanding the Challenge
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight"
            >
              The Problem{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Space
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              Understanding the challenges of speech articulation and motor
              planning
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
        {/* Core Challenges */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Core Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The key obstacles individuals face in speech articulation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Motor Planning Difficulty",
                description:
                  "Knowing what to say but struggling to coordinate the precise movements needed to say it",
                color: "from-blue-500 to-indigo-500",
              },
              {
                title: "Articulation Inconsistency",
                description:
                  "Being able to produce a sound sometimes, but not reliably or in different contexts",
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Limited Practice Tools",
                description:
                  "Few engaging, evidence-based resources that make repetitive practice sustainable",
                color: "from-cyan-500 to-blue-500",
              },
              {
                title: "Feedback Gaps",
                description:
                  "Difficulty perceiving one's own speech errors without external feedback",
                color: "from-blue-600 to-indigo-600",
              },
            ].map((challenge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-200 overflow-hidden">
                  {/* Decorative gradient corner */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${challenge.color} opacity-10 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500`}
                  />

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {challenge.description}
                  </p>

                  {/* Learn more button */}
                  <button
                    onClick={() =>
                      setExpandedCard(expandedCard === index ? null : index)
                    }
                    className="mt-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 cursor-pointer group/btn"
                  >
                    <span className="text-sm font-semibold">
                      {expandedCard === index ? "Show less" : "Learn more"}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Expanded Details Modal */}
        {expandedCard !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/70 to-indigo-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-gradient-to-br from-gray-900 to-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 border-b border-gray-700">
                <div className="relative p-6">
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-all duration-300 cursor-pointer z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 pr-10">
                      {
                        challengeDetails[
                          expandedCard as keyof typeof challengeDetails
                        ].title
                      }
                    </h3>
                    <p className="text-sm text-gray-400">
                      Detailed Information
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6 md:p-8 space-y-6 pb-8 bg-gray-900">
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">1</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Understanding the Challenge
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-11">
                    {
                      challengeDetails[
                        expandedCard as keyof typeof challengeDetails
                      ].fullDescription
                    }
                  </p>
                </div>

                <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">2</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Common Impacts
                    </h4>
                  </div>
                  <ul className="space-y-2.5 pl-11">
                    {challengeDetails[
                      expandedCard as keyof typeof challengeDetails
                    ].impacts.map((impact, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 bg-gray-700 rounded-md flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-gray-300 text-xs font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <span className="text-gray-300 leading-relaxed">
                          {impact}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">3</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Intervention Approaches
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-11">
                    {
                      challengeDetails[
                        expandedCard as keyof typeof challengeDetails
                      ].interventions
                    }
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-900/80 backdrop-blur-sm p-4 border-t border-gray-700">
                <button
                  onClick={() => setExpandedCard(null)}
                  className="w-full bg-gray-800 text-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border border-gray-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Why This Matters */}
        <section className="mb-24">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl" />
              </div>
            </div>

            <div className="relative p-12 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Why This Matters
                </h2>
                <div className="max-w-4xl">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Speech is fundamental to how we connect with others, express
                    ourselves, and participate in daily life. When someone knows
                    what they want to say but can't reliably produce the sounds,
                    it can lead to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Frustration and reduced confidence",
                      "Social isolation or misunderstanding",
                      "Limited educational and vocational opportunities",
                      "Heavy reliance on others for communication",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-blue-100"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Traditional speech therapy is essential, but it often
                    requires intensive, repetitive practice that can be
                    challenging to sustain—especially at home. This is where
                    supplementary tools and approaches might help.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research Questions */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Key Questions We're Exploring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding our research toward meaningful solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              "Can musical rhythm provide a scaffold that makes speech patterns more accessible?",
              "Do multimodal cues (visual + auditory + rhythmic) support learning better than single modalities?",
              "How can we design practice that is both effective and genuinely engaging?",
              "What role might technology play in providing real-time feedback and tracking progress?",
            ].map((question, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 overflow-hidden">
                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400 to-indigo-400 opacity-10 rounded-tr-full" />

                  <p className="text-gray-800 text-lg leading-relaxed font-medium pr-16">
                    {question}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
