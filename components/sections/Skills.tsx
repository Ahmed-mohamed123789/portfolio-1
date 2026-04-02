'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiFramer, SiBootstrap } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: SiReact, color: 'border-[#61DAFB]/30 bg-[#61DAFB]/10 group-hover:border-[#61DAFB] text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 group-hover:border-black dark:group-hover:border-white text-black dark:text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'border-[#3178C6]/30 bg-[#3178C6]/10 group-hover:border-[#3178C6] text-[#3178C6]' },
  { name: 'JavaScript', icon: SiJavascript, color: 'border-[#F7DF1E]/30 bg-[#F7DF1E]/10 group-hover:border-[#F7DF1E] text-[#D4B830] dark:text-[#F7DF1E]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'border-[#06B6D4]/30 bg-[#06B6D4]/10 group-hover:border-[#06B6D4] text-[#06B6D4]' },
  { name: 'Redux/Toolkit', icon: SiRedux, color: 'border-[#764ABC]/30 bg-[#764ABC]/10 group-hover:border-[#764ABC] text-[#764ABC]' },
  { name: 'Framer Motion', icon: SiFramer, color: 'border-[#0055FF]/30 bg-[#0055FF]/10 group-hover:border-[#0055FF] text-[#0055FF]' },
  { name: 'Git/GitHub', icon: FaGithub, color: 'border-gray-500/30 bg-gray-500/10 group-hover:border-gray-500 text-gray-700 dark:text-gray-300' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'border-[#7952B3]/30 bg-[#7952B3]/10 group-hover:border-[#7952B3] text-[#7952B3]' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--color-surface)]/30">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-[var(--color-primary)]">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full mx-auto glow-shadow-primary" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer relative"
            >
              <div
                className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${skill.color}`}
              >
                <div className={`flex items-center justify-center mb-2 drop-shadow-md ${skill.color}`}>
                  <skill.icon className="w-12 h-12" />
                </div>
                <h4 className="font-semibold tracking-wide text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
