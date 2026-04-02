'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Experience', value: '3+', suffix: '', color: 'from-blue-500 to-cyan-500' },
  { label: 'Projects Completed', value: '15+', suffix: '', color: 'from-indigo-500 to-purple-500' },
  { label: 'Technologies', value: '10+', suffix: '', color: 'from-pink-500 to-rose-500' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-[var(--color-primary)]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full glow-shadow-primary" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm  <strong className="text-black dark:text-white font-semibold">Ahmed Mohamed Alshrqawy</strong>,
              a dedicated Frontend Developer based in Egypt. I specialize in building high-performance, accessible,
              and visually stunning web applications using React and Next.js.
            </p>
            <p>
              My journey in web development taught me not just how to string code together, but how to craft intuitive user experiences. I obsess over detailed design, smooth micro-interactions, and robust architectures.
            </p>
            <p>
              Whether it's a dynamic dashboard, a high-converting landing page, or a complex e-commerce platform, I bring ideas to life with clean code and modern aesthetics.
            </p>
            <p>
              I also effectively leverage modern AI tools to speed up development, enhance productivity, and deliver high-quality results efficiently.            </p>
          </motion.div>

          {/* Right: Stats Cards */}
          <div className="grid sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-3xl glass-card relative overflow-hidden group 
                  ${i === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute -inset-px bg-gradient-to-b from-black/5 dark:from-white/10 to-transparent rounded-3xl z-0" />

                <div className="relative z-10 flex flex-col items-center text-center gap-2">
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                    {stat.value}{stat.suffix}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mt-2">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
