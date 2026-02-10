"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, BarChart, Lock, PlayCircle, Star, Filter } from "lucide-react";

export default function MockTestsPage() {
  const [filter, setFilter] = useState("All");

  const tests = [
    {
      id: 1,
      title: "IELTS Academic Test 1",
      type: "Academic",
      duration: "2h 45m",
      difficulty: "Medium",
      rating: 4.8,
      users: 1200,
      isFree: true,
      tags: ["Full Test", "New"]
    },
    {
      id: 2,
      title: "IELTS General Training Test 1",
      type: "General",
      duration: "2h 45m",
      difficulty: "Easy",
      rating: 4.5,
      users: 850,
      isFree: true,
      tags: ["Full Test"]
    },
    {
      id: 3,
      title: "IELTS Academic Test 2",
      type: "Academic",
      duration: "2h 45m",
      difficulty: "Hard",
      rating: 4.9,
      users: 2300,
      isFree: false,
      tags: ["Premium", "High Yield"]
    },
    {
      id: 4,
      title: "Cambridge IELTS 18 - Test 1",
      type: "Academic",
      duration: "2h 45m",
      difficulty: "Hard",
      rating: 5.0,
      users: 5000,
      isFree: false,
      tags: ["Official Source"]
    },
    {
      id: 5,
      title: "IELTS General Training Test 2",
      type: "General",
      duration: "2h 45m",
      difficulty: "Medium",
      rating: 4.7,
      users: 600,
      isFree: false,
      tags: ["Premium"]
    },
    {
      id: 6,
      title: "Speaking Mock Test - Part 1, 2, 3",
      type: "Speaking Only",
      duration: "15m",
      difficulty: "Medium",
      rating: 4.8,
      users: 3200,
      isFree: true,
      tags: ["AI Evaluation"]
    }
  ];

  const filteredTests = filter === "All" ? tests : tests.filter(t => t.type.includes(filter));

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-20 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              IELTS Mock Tests Library
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Simulate the real exam experience with our curated collection of mock tests. 
              Get instant feedback, band scores, and detailed performance analytics.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
            {["All", "Academic", "General", "Speaking Only"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  filter === f
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Filter size={16} />
            <span>Sorted by: Popularity</span>
          </div>
        </div>

        {/* Test Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div 
              key={test.id}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    {test.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {!test.isFree && (
                    <span className="bg-amber-100 text-amber-700 p-1.5 rounded-lg">
                      <Lock size={14} />
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {test.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {test.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart size={14} />
                    {test.difficulty}
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="px-6 py-3 bg-slate-50 border-t border-b border-slate-100 flex justify-between items-center text-xs font-medium text-slate-500">
                 <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-slate-700">{test.rating}</span>
                 </div>
                 <div>
                    {test.users.toLocaleString()} taken
                 </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 mt-auto">
                {test.isFree ? (
                  <Link 
                    href="/exam"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
                  >
                    <PlayCircle size={18} /> Start Test
                  </Link>
                ) : (
                  <Link 
                    href="/pricing"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold rounded-xl transition-all"
                  >
                    <Lock size={16} /> Unlock Premium
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTests.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex p-4 bg-slate-100 rounded-full mb-4">
              <Filter size={32} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No tests found</h3>
            <p className="text-slate-500">Try adjusting your filters.</p>
          </div>
        )}

      </div>
    </div>
  );
}
