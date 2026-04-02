'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured modern e-commerce platform with a dynamic product catalog, shopping cart, and seamless checkout experience.',
    tech: ['React.js', 'Tailwindcss'],
    image: '/images/ecommerce.png',
    liveUrl: 'https://e-commors2.vercel.app/',
    githubUrl: 'https://github.com/Ahmed-mohamed123789/E-commors2.git',
  },
  {
    title: "Restaurant Digital Menu",
    description: "An elegant interactive digital menu for a restaurant showcasing categories, beautiful imagery, and smooth filtering functionality.",
    tech: ['HTML', 'CSS', 'JavaScript', "jQuery"],
    image: '/images/menu.png',
    liveUrl: "https://ahmed-mohamed123789.github.io/Sharm-El-Sheikh-Restaurant-Menu-Digital-Menu-Design/",
    githubUrl: "https://github.com/Ahmed-mohamed123789/Sharm-El-Sheikh-Restaurant-Menu-Digital-Menu-Design",
  },
  {
    title: 'Movie App',
    description: "A cinematic movie browsing application offering the latest releases, trending films, and deep details about any movie.",
    tech: ["React", "Tailwind CSS"],
    image: '/images/movie.png',
    liveUrl: "https://movie-swart-pi.vercel.app/",
    githubUrl: 'https://github.com/Ahmed-mohamed123789',
  },
  {
    title: "Weather App",
    description: "A fast, accurate lightweight weather application providing real-time forecasts and conditions with a clean, intuitive layout.",
    tech: ["HTML", "Bootstrap", "JavaScript"],
    liveUrl: "https://ahmed-mohamed123789.github.io/weather-project/",
    githubUrl: "https://github.com/Ahmed-mohamed123789/weather-project/",
    // gradient: "from-cyan-500/20 via-sky-500/20 to-blue-500/20",
    image: "/images/weather.png"   // 👈 ده الجديد
  }

];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-[var(--color-primary)]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full glow-shadow-primary" />
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden aspect-[16/10] bg-[var(--color-surface)]/50 border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-500 group-hover:glow-shadow-primary">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 via-transparent to-transparent z-10 opacity-60 lg:opacity-0 transition-opacity duration-500" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-gray-800 dark:text-gray-300 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-medium transition-all shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-[var(--color-primary)]/40 hover:-translate-y-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-surface)] border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/20 dark:hover:border-white/20 text-black dark:text-white font-medium transition-all hover:-translate-y-1"
                  >
                    <Code className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
