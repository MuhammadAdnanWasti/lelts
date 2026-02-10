"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ExamModule = "listening" | "reading" | "writing" | "speaking";

interface ExamState {
  currentModule: ExamModule;
  timeLeft: number; // in seconds
  totalTime: number;
  isExamActive: boolean;
}

interface ExamContextType extends ExamState {
  startExam: (module: ExamModule, duration: number) => void;
  finishModule: () => void;
  setTimeLeft: (time: number) => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentModule, setCurrentModule] = useState<ExamModule>("listening");
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isExamActive, setIsExamActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isExamActive) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsExamActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamActive]);

  const startExam = (module: ExamModule, duration: number) => {
    setCurrentModule(module);
    setTotalTime(duration);
    setTimeLeft(duration);
    setIsExamActive(true);
  };

  const finishModule = () => {
    setIsExamActive(false);
    // Logic to navigate to next module or results
  };

  return (
    <ExamContext.Provider
      value={{
        currentModule,
        timeLeft,
        totalTime,
        isExamActive,
        startExam,
        finishModule,
        setTimeLeft,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
};
