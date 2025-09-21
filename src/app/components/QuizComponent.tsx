"use client";
import React, { useState } from "react";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}

interface QuizComponentProps {
  questions: QuizQuestion[];
}

export default function QuizComponent({ questions }: QuizComponentProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOption = (idx: number) => {
    setSelected(idx);
    if (idx === questions[current].answer) setScore(score + 1);
    setShowResult(true);
  };

  const next = () => {
    setSelected(null);
    setShowResult(false);
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return (
      <div className="text-center">
        <div className="text-2xl font-bold text-emerald-700 mb-2">Quiz Complete!</div>
        <div className="text-lg mb-4">Your Score: <span className="font-bold">{score} / {questions.length}</span></div>
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl font-semibold" onClick={() => { setCurrent(0); setScore(0); }}>Restart</button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-emerald-100 max-w-md mx-auto">
      <div className="font-semibold text-emerald-700 mb-2">Q{current + 1}: {q.question}</div>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            className={`w-full text-left px-4 py-2 rounded-xl border font-medium transition-colors ${selected === idx ? (idx === q.answer ? 'bg-emerald-200 border-emerald-400' : 'bg-red-100 border-red-300') : 'bg-gray-50 border-gray-200 hover:bg-yellow-50'}`}
            disabled={showResult}
            onClick={() => handleOption(idx)}
          >
            {opt}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="mt-2 text-sm">
          {selected === q.answer ? (
            <span className="text-emerald-600 font-semibold">Correct!</span>
          ) : (
            <span className="text-red-500 font-semibold">Incorrect.</span>
          )}
          {q.explanation && <div className="mt-1 text-gray-500">{q.explanation}</div>}
          <button className="mt-4 px-4 py-2 bg-yellow-400 text-emerald-900 rounded-xl font-semibold" onClick={next}>Next</button>
        </div>
      )}
    </div>
  );
}
