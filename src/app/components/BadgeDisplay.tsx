import React from "react";

interface BadgeDisplayProps {
  badges: { name: string; icon: React.ReactNode; description: string }[];
}

export default function BadgeDisplay({ badges }: BadgeDisplayProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {badges.map((badge, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-4 border border-emerald-100">
          <div className="text-4xl mb-2">{badge.icon}</div>
          <div className="font-semibold text-emerald-700">{badge.name}</div>
          <div className="text-xs text-gray-500 mt-1">{badge.description}</div>
        </div>
      ))}
    </div>
  );
}
