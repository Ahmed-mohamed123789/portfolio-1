'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="container mx-auto px-10 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:pt-0 pt-16">

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-black dark:text-white"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-glow">Ahmed Mohamed</span>
              <br />
              Frontend Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed"
            >
              I am a passionate Frontend Developer specializing in React and Next.js, focused on building modern, responsive, and high-performance web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a
                href="#projects"
                className="group px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://flowcv.com/resume/p07fjo8bsklt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-md text-black dark:text-white font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right Column: Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto aspect-square"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 dark:border-white/20 glow-shadow-primary"
            >
              <img
                src="/images/photo.jpg"
                alt="Ahmed Mohamed Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent mix-blend-overlay"></div>
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-surface rounded-2xl glass flex items-center justify-center shadow-xl border border-white/10"
            >
              <span className="text-4xl text-[var(--color-accent)] font-bold">⚛️</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-surface rounded-full glass flex items-center justify-center shadow-xl border border-white/10"
            >
              <span className="text-3xl text-[var(--color-primary)] font-bold">▲</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
