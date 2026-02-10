"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Gradients matching Hero & Features */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-100/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-100/30 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm mb-6 mx-auto">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Start Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Ready to Achieve Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Target Band Score?
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed font-medium">
            Join thousands of successful test-takers who are practicing smarter with our AI-powered simulator.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-200 flex items-center justify-center group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/exam"
              className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-base rounded-xl hover:bg-slate-50 transition-all duration-200 flex items-center justify-center"
            >
              Try Mock Test
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
