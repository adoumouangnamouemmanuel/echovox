"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Music, Users } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.png"
            alt="Research collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-blue-400/30"
              initial={{
                x:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerWidth
                    : Math.random() * 1920,
                y:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerHeight
                    : Math.random() * 1080,
              }}
              animate={{
                y: [
                  null,
                  typeof window !== "undefined"
                    ? Math.random() * window.innerHeight
                    : Math.random() * 1080,
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants}>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 backdrop-blur-md">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  eransition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-blue-400"
                />
                <span className="text-sm font-medium text-blue-300">
                  Ongoing Research
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              <span className="inline-block">
                {"Speech Articulation Research".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-12 text-xl leading-relaxed text-gray-300 lg:text-2xl"
            >
              Exploring multimodal approaches to support speech development
              through music, rhythm, and technology
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/approach"
                  className="inline-flex items-center h-14 bg-blue-600 px-8 text-lg hover:bg-blue-700 shadow-lg shadow-blue-600/50 rounded-lg font-semibold transition-colors"
                >
                  Explore Our Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center h-14 border-2 border-white/30 px-8 text-lg text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-2 gap-8"
            >
              {[
                { label: "Research Focus", value: "4 Areas" },
                { label: "Status", value: "Active" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="border-l-2 border-blue-400/50 pl-4"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs uppercase tracking-wider">
              Scroll to explore
            </span>
            <div className="h-8 w-5 rounded-full border-2 border-white/30">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-white/60"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Key Features */}
        <section className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-3xl -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                What We're Exploring
              </span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-800" />
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Music,
                title: "Musical Rhythm",
                desc: "How music supports speech motor patterns",
              },
              {
                icon: BookOpen,
                title: "Research-Based",
                desc: "Grounded in evidence and observation",
              },
              {
                icon: Users,
                title: "Collaborative",
                desc: "Working with families and experts",
              },
              {
                icon: Heart,
                title: "Ethics First",
                desc: "Prioritizing well-being and dignity",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 group">
                  <CardContent className="pt-8">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research Impact Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Research Impact
              </span>
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-800" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Impact Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Community Driven
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our research is shaped by real experiences from families,
                  educators, and speech professionals working together to
                  explore innovative approaches.
                </p>
              </div>
            </motion.div>

            {/* Impact Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Evidence-Based Practice
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every observation and finding is carefully documented and
                  reviewed, ensuring our work maintains the highest standards of
                  research integrity.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
