"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, BookOpen, Layers, Users, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Authentic Tests",
      description: "Practice with real exam-format tests carefully curated by former IELTS examiners to match the difficulty of the actual exam."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Detailed Analytics",
      description: "Track your progress with precision. Our AI breaks down your performance by question type, identifying your exact weak spots."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Comprehensive Resources",
      description: "Access a massive library of reading passages, audio transcripts, model essays, and vocabulary lists."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Instant Feedback",
      description: "Get immediate band scores and detailed correction for your writing and speaking tasks powered by advanced AI."
    },
    {
      icon: <Layers className="w-8 h-8 text-green-600" />,
      title: "Module-Specific Training",
      description: "Focus on individual skills. Drill Reading, Listening, Writing, or Speaking separately to overcome specific hurdles."
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Community Support",
      description: "Join a community of thousands of test-takers. Share tips, discuss strategies, and stay motivated together."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      {/* Background Gradients matching Hero */}
      <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-indigo-100/30 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-100/30 blur-[100px] rounded-full translate-y-1/3 translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why Choose <span className="text-blue-600">IELTS Practice Pro?</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We combine expert-curated content with cutting-edge AI technology to provide the most effective preparation experience possible.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
