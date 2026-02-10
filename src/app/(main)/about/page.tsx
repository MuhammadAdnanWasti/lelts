"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Globe, Target, Shield, ArrowRight, Award, Zap } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: 'Students Helped', value: '50K+', icon: <Users className="w-5 h-5" /> },
    { label: 'Mock Tests Taken', value: '1M+', icon: <Zap className="w-5 h-5" /> },
    { label: 'Success Rate', value: '95%', icon: <Award className="w-5 h-5" /> },
    { label: 'Global Reach', value: '50+', icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      
      {/* 1. Hero Section - Clean & Professional */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-6">
              Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Empowering Your <br className="hidden md:block" />
              <span className="text-blue-600">Global Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to democratizing IELTS preparation by combining expert pedagogy with cutting-edge AI technology to help you achieve your dream score.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Grid - Floating Style */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-xl mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Story Section - Split Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Grid */}
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                  <div className="h-48 bg-slate-200 rounded-2xl overflow-hidden">
                     {/* Placeholder for Team/Office Image */}
                     <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')]"></div>
                  </div>
                  <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden">
                     <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')]"></div>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden">
                     <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')]"></div>
                  </div>
                  <div className="h-48 bg-slate-200 rounded-2xl overflow-hidden">
                     <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')]"></div>
                  </div>
               </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Bridging the Gap Between <br />
                <span className="text-blue-600">Ambition & Achievement</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  It started with a simple observation: talented students were missing out on global opportunities not because of their potential, but because of a lack of proper guidance for the IELTS exam.
                </p>
                <p>
                  In 2023, we assembled a team of former examiners, linguists, and AI engineers to solve this. Our goal was to create a platform that offers the personalized feedback of a private tutor at a fraction of the cost.
                </p>
                <p>
                  Today, we&apos;re proud to be the trusted partner for thousands of test-takers worldwide, helping them turn their study abroad and immigration dreams into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values That Drive Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We believe in integrity, innovation, and putting the student first in everything we do.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Student-Centricity",
              desc: "Every feature we build starts with one question: 'How does this help the student succeed?'",
              icon: <Target className="w-8 h-8 text-white" />,
              color: "bg-blue-600"
            },
            {
              title: "Uncompromising Quality",
              desc: "We adhere to the strict standards of official IELTS exams to ensure your practice is authentic.",
              icon: <Shield className="w-8 h-8 text-white" />,
              color: "bg-indigo-600"
            },
            {
              title: "Continuous Innovation",
              desc: "We leverage the latest AI technology to provide feedback that gets smarter every day.",
              icon: <Zap className="w-8 h-8 text-white" />,
              color: "bg-purple-600"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-left">
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/10`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Join the Future of IELTS Prep
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto relative z-10">
            Don&apos;t let the IELTS exam stand in your way. Start practicing with the most advanced simulator today.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors relative z-10 group"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
