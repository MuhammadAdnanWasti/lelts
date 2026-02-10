"use client";

import { useExam } from "@/components/exam/ExamContext";
import { useRouter } from "next/navigation";
import { BookOpen, Headphones, PenTool, Mic } from "lucide-react";

export default function ExamPage() {
  const { startExam } = useExam();
  const router = useRouter();

  const modules = [
    {
      id: "listening",
      title: "Listening",
      duration: 30 * 60, // 30 mins
      icon: <Headphones className="w-8 h-8 text-blue-500" />,
      description: "4 Sections, 40 Questions",
    },
    {
      id: "reading",
      title: "Reading",
      duration: 60 * 60, // 60 mins
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      description: "3 Passages, 40 Questions",
    },
    {
      id: "writing",
      title: "Writing",
      duration: 60 * 60, // 60 mins
      icon: <PenTool className="w-8 h-8 text-orange-500" />,
      description: "2 Tasks",
    },
    {
      id: "speaking",
      title: "Speaking",
      duration: 15 * 60, // 15 mins
      icon: <Mic className="w-8 h-8 text-red-500" />,
      description: "3 Parts",
    },
  ];

  const handleStart = (id: string, duration: number) => {
    startExam(id as any, duration);
    router.push(`/exam/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-50 p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">IELTS Exam Simulator</h1>
        <p className="text-slate-600 mb-10 text-center">Select a module to begin your practice test.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => handleStart(module.id, module.duration)}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-500 transition-all flex items-start text-left group"
            >
              <div className="mr-4 bg-slate-50 p-3 rounded-lg group-hover:bg-blue-50 transition-colors">
                {module.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-2">{module.description}</p>
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                   {Math.floor(module.duration / 60)} Minutes
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
