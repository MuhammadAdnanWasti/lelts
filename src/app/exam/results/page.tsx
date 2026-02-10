"use client";

import { CheckCircle, XCircle, BarChart2, BookOpen, Headphones, PenTool, Mic } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  // Mock Data
  const overallBand = 7.5;
  const scores = {
    listening: 8.0,
    reading: 7.0,
    writing: 6.5,
    speaking: 8.5
  };

  const bandDescription = (band: number) => {
      if (band >= 9) return "Expert User";
      if (band >= 8) return "Very Good User";
      if (band >= 7) return "Good User";
      if (band >= 6) return "Competent User";
      return "Modest User";
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Exam Results</h1>
           <p className="text-lg text-slate-600">Here is a breakdown of your performance.</p>
        </div>

        {/* Overall Score Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-slate-200">
           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white flex flex-col md:flex-row items-center justify-between">
              <div>
                 <h2 className="text-2xl font-bold mb-1">Overall Band Score</h2>
                 <p className="text-blue-100 opacity-90">{bandDescription(overallBand)}</p>
              </div>
              <div className="mt-6 md:mt-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full w-32 h-32 border-4 border-white/30">
                  <span className="text-5xl font-extrabold">{overallBand}</span>
              </div>
           </div>
           
           <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScoreCard 
                 title="Listening" 
                 score={scores.listening} 
                 icon={<Headphones className="w-6 h-6 text-blue-500" />} 
                 color="bg-blue-50"
              />
              <ScoreCard 
                 title="Reading" 
                 score={scores.reading} 
                 icon={<BookOpen className="w-6 h-6 text-green-500" />} 
                 color="bg-green-50"
              />
              <ScoreCard 
                 title="Writing" 
                 score={scores.writing} 
                 icon={<PenTool className="w-6 h-6 text-orange-500" />} 
                 color="bg-orange-50"
              />
              <ScoreCard 
                 title="Speaking" 
                 score={scores.speaking} 
                 icon={<Mic className="w-6 h-6 text-red-500" />} 
                 color="bg-red-50"
              />
           </div>
        </div>

        {/* Detailed Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                   <BarChart2 className="w-5 h-5 text-blue-600" />
                   Performance Analysis
               </h3>
               <div className="space-y-4">
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                       <span className="font-medium text-slate-700">Correct Answers</span>
                       <span className="text-green-600 font-bold flex items-center gap-1">
                           <CheckCircle size={16} /> 32/40
                       </span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                       <span className="font-medium text-slate-700">Incorrect Answers</span>
                       <span className="text-red-500 font-bold flex items-center gap-1">
                           <XCircle size={16} /> 8/40
                       </span>
                   </div>
                   <div className="mt-4 pt-4 border-t border-slate-100">
                       <p className="text-sm text-slate-600 leading-relaxed">
                           <span className="font-semibold text-slate-800">Feedback:</span> Your listening skills are strong. You missed a few details in Section 3 (Multiple Choice). Focus on identifying keywords before the audio starts.
                       </p>
                   </div>
               </div>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <h3 className="text-xl font-bold text-slate-800 mb-4">Improvement Tips</h3>
               <ul className="space-y-3">
                   <li className="flex items-start gap-3">
                       <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">1</span>
                       <p className="text-slate-600 text-sm">Practice skimming and scanning techniques for Reading Passage 3 to manage time better.</p>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">2</span>
                       <p className="text-slate-600 text-sm">In Writing Task 2, ensure you provide more specific examples to support your arguments.</p>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">3</span>
                       <p className="text-slate-600 text-sm">For Speaking, try to vary your intonation to sound more natural.</p>
                   </li>
               </ul>
           </div>
        </div>

        <div className="mt-10 text-center">
            <Link 
              href="/exam" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-md hover:shadow-lg"
            >
                Take Another Exam
            </Link>
        </div>
      </div>
    </div>
  );
}

const ScoreCard = ({ title, score, icon, color }: { title: string, score: number, icon: React.ReactNode, color: string }) => (
    <div className={`rounded-xl p-4 border border-slate-100 ${color} flex flex-col items-center justify-center text-center transition-transform hover:scale-105`}>
        <div className="mb-3 bg-white p-3 rounded-full shadow-sm">
            {icon}
        </div>
        <h3 className="font-semibold text-slate-700 mb-1">{title}</h3>
        <span className="text-3xl font-bold text-slate-900">{score}</span>
    </div>
);
