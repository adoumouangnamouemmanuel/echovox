"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Sparkles, Users } from "lucide-react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-pulse" />
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, typeof window !== "undefined" ? Math.random() * window.innerHeight : 0],
              x: [null, typeof window !== "undefined" ? Math.random() * window.innerWidth : 0],
              opacity: [null, Math.random() * 0.5 + 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white leading-tight"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Dream Team
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Passionate innovators, researchers, and experts united by a shared
              mission to transform speech articulation support through
              creativity and science
            </motion.p>

            {/* Decorative Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 text-white"
            >
              {[
                { value: "4", label: "Core Members" },
                { value: "3", label: "Disciplines" },
                { value: "100%", label: "Dedication" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center bg-blue-600/20 backdrop-blur-md px-8 py-5 rounded-2xl border-2 border-blue-400/30 shadow-lg"
                >
                  <div className="text-5xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-white uppercase tracking-wider drop-shadow-md">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="mb-16 text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This research is a collaboration between parents, learners,
            educators, and technology enthusiasts united by curiosity and a
            commitment to responsible exploration.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              The Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals driving our research forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Ayshatu Mohammed",
                role: "Research Team Member",
                description:
                  "Dedicated researcher contributing to multimodal learning approaches",
                avatar: "/isha.jpeg",
                email: "ayshatu.mohammed@speechresearch.org",
                linkedin: "ayshatu-mohammed",
              },
              {
                name: "Emmanuel Adoum",
                role: "Full Stack Developer",
                description:
                  "Full-stack developer passionate about accessible technology and innovative solutions",
                avatar: "/emma1.jpg",
                email: "emmanuel.adoum@speechresearch.org",
                linkedin: "emmanuel-adoum",
              },

              {
                name: "Chioma Chukuemeka",
                role: "Research Team Member",
                description:
                  "Research specialist focused on speech articulation and motor planning",
                avatar: "/chioma.jpg",
                email: "chioma.chukuemeka@speechresearch.org",
                linkedin: "chioma-chukuemeka",
              },
              {
                name: "Emmanuel",
                role: "Research Team Member",
                description:
                  "Dedicated researcher contributing to multimodal learning approaches",
                avatar: "/emmanuel.jpeg",
                email: "emmanuel@speechresearch.org",
                linkedin: "emmanuel",
              },
              {
                name: "Vivance",
                role: "Research Team Member",
                description:
                  "Team member dedicated to advancing speech development research",
                avatar: "/emma1.jpg",
                email: "vivance@speechresearch.org",
                linkedin: "vivance",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative h-full"
                >
                  {/* Card Container */}
                  <div className="relative h-full bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-blue-100">
                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-10 rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-10 rounded-tr-full" />

                    <div className="relative p-8">
                      {/* Profile Image Section */}
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="relative w-36 h-36 mx-auto"
                        >
                          {/* Animated Ring */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-spin-slow opacity-20 blur-sm" />

                          {/* Profile Picture */}
                          <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                          </div>

                          {/* Status Badge */}
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                          >
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Member Info */}
                      <div className="text-center mb-6 space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                          {member.name}
                        </h3>
                        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                          <p className="text-xs font-bold text-white uppercase tracking-wider">
                            {member.role}
                          </p>
                        </div>
                        <p className="text-gray-600 leading-relaxed pt-2">
                          {member.description}
                        </p>
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex gap-3 pt-6 border-t border-gray-200">
                        <motion.a
                          href={`mailto:${member.email}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transition-all font-semibold group/btn"
                        >
                          <Mail className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          <span className="text-sm">Email</span>
                        </motion.a>
                        <motion.a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 transition-all font-semibold group/btn"
                        >
                          <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          <span className="text-sm">LinkedIn</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Shared Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ethics First",
                description:
                  "Participant well-being takes precedence over research goals",
              },
              {
                title: "Intellectual Humility",
                description:
                  "We acknowledge what we don't know and remain open",
              },
              {
                title: "Evidence-Based",
                description:
                  "We follow the data, even when it challenges expectations",
              },
              {
                title: "Collaborative",
                description:
                  "We value diverse perspectives and learn from each other",
              },
              {
                title: "Creative Curiosity",
                description:
                  "We approach challenges with imagination and innovation",
              },
              {
                title: "Compassionate Practice",
                description: "We center empathy, respect, and genuine care",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-10 rounded-bl-full transform group-hover:scale-110 transition-transform duration-300" />

                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>

                  <div className="relative pt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advisory Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Advisory & Support Network
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Beyond our core team, we're supported by advisors and consultants
            who provide guidance and diverse perspectives:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Clinical Advisors",
                members:
                  "Speech-language pathologists, occupational therapists, pediatric neurologists",
              },
              {
                category: "Family Partners",
                members:
                  "Parents and caregivers providing lived experience perspectives",
              },
              {
                category: "Academic Consultants",
                members:
                  "Researchers in music cognition, motor learning, educational psychology",
              },
              {
                category: "Community Members",
                members:
                  "Self-advocates, disability rights advocates, accessibility consultants",
              },
            ].map((network, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 mb-2">
                  {network.category}
                </h4>
                <p className="text-gray-600">{network.members}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Us CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="relative p-10 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-200/50 backdrop-blur-sm rounded-full text-blue-800 text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Join Our Mission
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Let's Create Impact Together
              </h2>

              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                Interested in collaborating, contributing, or learning more
                about our research? We'd love to connect with you.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl transition-all text-base group"
              >
                <span>Get in Touch</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
