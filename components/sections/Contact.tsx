'use client';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_g88kpu4',
        'template_zgrbwbg',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '901hlPHeO97BCOwHn'
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.log("EMAILJS ERROR FULL:", error);
      alert(error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 pt-24 relative overflow-hidden bg-[var(--color-surface)]/30">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 ">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="text-[var(--color-primary)]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full glow-shadow-primary" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Whether you have a question, want to start a project, or simply want to connect.
              Feel free to send me a message!
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <a href="mailto:ahamdalshrqawy244@gmail.com" className="flex items-center gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-500 mb-1">Email</p>
                  <p className="text-black dark:text-white text-base sm:text-lg font-semibold group-hover:text-[var(--color-accent)] transition-colors break-all">
                    ahamdalshrqawy244@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:01097480641" className="flex items-center gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-500 mb-1">Phone</p>
                  <p className="text-black dark:text-white text-base sm:text-lg font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                    +20 109 748 0641
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="shrink-0 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-500 mb-1">Location</p>
                  <p className="text-black dark:text-white text-base sm:text-lg font-semibold">
                    Egypt
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="w-full glass-card p-6 sm:p-10 rounded-[2rem]"
          >
            {isSuccess && (
              <div className="mb-4 p-4 rounded-xl bg-green-500/10 border border-green-500 text-green-600 text-center font-medium">
                ✅ Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--color-surface)] dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--color-surface)] dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--color-surface)] dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 group relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl text-white font-bold tracking-wide transition-all shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-70 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    'Sending...'
                  ) : isSuccess ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
