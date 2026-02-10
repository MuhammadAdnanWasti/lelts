'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProfessionalHero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100">

      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Bold Text & CTA */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                {...fadeInUp}
                className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest"
              >
                The Future of IELTS Preparation
              </motion.div>

              <motion.h1
                {...fadeInUp}
                className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-slate-900"
              >
                Score <span className="text-blue-600 italic">8.5</span> <br />
                Without the <br />
                Struggle.
              </motion.h1>

              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-500 max-w-lg leading-relaxed"
              >
                Experience the world's most advanced AI-tutor that listens to
                your speaking and grades your writing instantly.
              </motion.p>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-95 transition-all">
                  Get Started Free
                </button>
                <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                  View Curriculum
                </button>
              </motion.div>
            </div>

            {/* Right Column: Interactive Bento-style Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Live Analysis */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="col-span-2 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between h-48"
                >
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Live Analysis
                      </p>
                      <p className="text-xl font-bold text-green-500">
                        Writing Task 2
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-blue-600"
                      />
                    </div>
                    <p className="text-xs font-semibold text-slate-500 underline underline-offset-4">
                      Vocabulary diversity is excellent!
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-indigo-600 p-6 rounded-[2rem] text-white space-y-2 h-40"
                >
                  <p className="text-4xl font-bold">94%</p>
                  <p className="text-xs font-medium opacity-80 uppercase tracking-tighter">
                    Success Rate in <br />
                    First Attempt
                  </p>
                </motion.div>

                {/* Card 3: Speaking Module */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center justify-center h-40"
                >
                  <div className="text-center">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3].map(i => (
                        <div
                          key={i}
                          className="h-4 w-1 bg-blue-600 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      Speaking Test
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Recording Live...
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Circle Background */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Trusted By Section */}
      <footer className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center overflow-hidden relative">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em] mb-8">
            Endorsed by Global Institutions
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale invert items-center">
            {['BRITISH COUNCIL', 'IDP', 'CAMBRIDGE', 'PEARSON'].map(brand => (
              <span
                key={brand}
                className="text-2xl font-black italic tracking-tighter"
              >
                {brand}
              </span>
            ))}
          </div>
          {/* Subtle Glow */}
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
      </footer>
    </div>
  );
}
