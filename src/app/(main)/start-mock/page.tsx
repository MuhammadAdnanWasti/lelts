"use client";

import Link from "next/link";
import { Clock, PlayCircle, BarChart, CheckCircle2 } from "lucide-react";

export default function StartMockPage() {
  const mockTests = [
    {
      id: 1,
      title: "Academic Reading Test 1",
      duration: "60 mins",
      questions: 40,
      difficulty: "Medium",
      type: "Academic",
      tags: ["Reading", "Full Test"]
    },
    {
      id: 2,
      title: "General Training Listening 1",
      duration: "30 mins",
      questions: 40,
      difficulty: "Easy",
      type: "General",
      tags: ["Listening", "Audio Included"]
    },
    {
      id: 3,
      title: "Academic Writing Task 1",
      duration: "20 mins",
      questions: 1,
      difficulty: "Hard",
      type: "Academic",
      tags: ["Writing", "Graph Analysis"]
    },
    {
      id: 4,
      title: "Speaking Part 1 & 2",
      duration: "15 mins",
      questions: 5,
      difficulty: "Medium",
      type: "Both",
      tags: ["Speaking", "Recorder"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Free IELTS <span className="text-blue-600">Mock Tests</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Practice with our professionally curated mock tests designed to simulate real exam conditions. Get instant results and detailed feedback.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
            {["All Tests", "Reading", "Listening", "Writing", "Speaking"].map((filter, i) => (
              <button
                key={i}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  i === 0
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="relative w-full sm:w-64">
             <input
               type="text"
               placeholder="Search tests..."
               className="w-full pl-4 pr-10 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm outline-none transition-shadow"
             />
             <div className="absolute right-3 top-2.5 text-slate-400">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </div>
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mockTests.map((test) => (
            <div key={test.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    test.type === 'Academic' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
                    test.type === 'General' ? 'bg-green-50 text-green-700 border border-green-100' :
                    'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}>
                    {test.type}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${
                    test.difficulty === 'Easy' ? 'text-green-600 bg-green-50/50 border-green-100' :
                    test.difficulty === 'Medium' ? 'text-yellow-600 bg-yellow-50/50 border-yellow-100' :
                    'text-red-600 bg-red-50/50 border-red-100'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {test.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-5">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded text-xs font-medium">
                    <Clock size={14} />
                    {test.duration}
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded text-xs font-medium">
                    <BarChart size={14} />
                    {test.questions} Qs
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {test.tags.map((tag, index) => (
                    <span key={index} className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <Link
                  href="/exam" 
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white text-slate-700 font-bold rounded-xl transition-all shadow-sm"
                >
                  Start Test <PlayCircle size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section - Modern Cards */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why Take Our Mock Tests?</h2>
            <p className="text-slate-600">
              Our mock tests are designed by former IELTS examiners to help you get the score you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accurate Scoring",
                desc: "Get an estimated band score based on official IELTS marking criteria.",
                icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
                bg: "bg-blue-50"
              },
              {
                title: "Instant Results",
                desc: "See your results immediately after finishing Listening and Reading tests.",
                icon: <PlayCircle className="w-6 h-6 text-purple-600" />,
                bg: "bg-purple-50"
              },
              {
                title: "Performance Analytics",
                desc: "Track your progress over time and identify areas for improvement.",
                icon: <BarChart className="w-6 h-6 text-green-600" />,
                bg: "bg-green-50"
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
