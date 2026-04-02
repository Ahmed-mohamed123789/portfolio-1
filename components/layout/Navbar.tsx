'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-2
           z-50 transition-all duration-300 ${isScrolled
            ? 'bg-[var(--color-surface)]/10 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-lg'
            : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold tracking-tighter">
            <span className="text-gray-900 dark:text-white">Ahmed Mohaemd</span>
            {/* <span className="text-[var(--color-primary)]">.dev</span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all group-hover:w-full rounded-full glow-shadow" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/20 dark:hover:bg-white/10 text-gray-900 dark:text-white text-sm font-medium transition-all dark:hover:glow-shadow-primary"
            >
              Hire Me
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <button
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[var(--color-surface)] border-l border-black/10 dark:border-white/10 z-[70] p-6 shadow-2xl flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl text-gray-900 dark:text-white font-bold tracking-tighter">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5 rounded-full transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors border-b border-black/5 dark:border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto pb-8">
              <a
                href="#contact"
                onClick={closeMenu}
                className="w-full block text-center py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg hover:shadow-primary/25 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
