import React from "react";

interface Goal {
  name: string;
  target: number;
  current: number;
  icon?: React.ReactNode;
}

interface GoalTrackerProps {
  goals: Goal[];
}

export default function GoalTracker({ goals }: GoalTrackerProps) {
  return (
    <div className="space-y-6">
      {goals.map((goal, idx) => {
        const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
        return (
          <div key={idx} className="bg-white rounded-xl shadow p-4 border border-emerald-100">
            <div className="flex items-center gap-2 mb-2">
              {goal.icon && <span className="text-2xl">{goal.icon}</span>}
              <span className="font-semibold text-emerald-700">{goal.name}</span>
              <span className="ml-auto text-xs text-gray-500">₹{goal.current} / ₹{goal.target}</span>
            </div>
            <div className="w-full bg-emerald-100 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-emerald-400 to-yellow-300 h-3 rounded-full transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="text-right text-xs text-gray-500 mt-1">{percent}%</div>
          </div>
        );
      })}
    </div>
  );
}
